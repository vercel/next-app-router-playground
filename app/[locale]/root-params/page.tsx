import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import { Tab } from '#/ui/tabs';
import { locale } from 'next/root-params';
import Link from 'next/link';

const labels = {
  en: {
    name: 'English',
    heading: 'Products',
    summary: 'This cached list reads the root locale from next/root-params.',
  },
  fr: {
    name: 'Français',
    heading: 'Produits',
    summary:
      'Cette liste mise en cache lit la locale racine avec next/root-params.',
  },
};

type Locale = keyof typeof labels;

export default async function Page() {
  const currentLocale = toLocale(await locale());
  const catalog = await getLocalizedCatalog();

  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-4">
        <LocaleSwitcher />

        <Boundary label="getLocalizedCatalog() ('use cache')" size="small">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-gray-300">
              {labels[currentLocale].heading}{' '}
              <span className="font-mono tracking-tighter text-gray-600">
                ({catalog.products.length})
              </span>
            </h1>

            <div className="text-sm text-gray-400">
              {labels[currentLocale].summary}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {catalog.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/${currentLocale}/root-params/${product.id}`}
                  className="block"
                >
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          </div>
        </Boundary>
      </div>
    </Boundary>
  );
}

async function getLocalizedCatalog() {
  'use cache';

  const currentLocale = toLocale(await locale());

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    locale: currentLocale,
    products: db.product.findMany({ limit: currentLocale === 'en' ? 3 : 2 }),
  };
}

function LocaleSwitcher() {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(labels).map(([value, label]) => (
        <Tab
          key={value}
          item={{ text: label.name, slug: `${value}/root-params` }}
        />
      ))}
    </div>
  );
}

function toLocale(value: string): Locale {
  return value === 'fr' ? 'fr' : 'en';
}
