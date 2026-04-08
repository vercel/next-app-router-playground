'use cache';

import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';
import { RuntimeProducts } from './_components/runtime-products';
import { SuffixProvider } from './_components/suffix-input';

const PRE_RENDERED_IDS = ['1', '2', '3'];

export default async function Page() {
  const products = db.product.findMany({ limit: 9 });
  const preRendered = products.filter((p) => PRE_RENDERED_IDS.includes(p.id));
  const runtime = products.filter((p) => !PRE_RENDERED_IDS.includes(p.id));

  return (
    <Boundary label="page.tsx (Cacheable)">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">
          Products{' '}
          <span className="font-mono tracking-tighter text-gray-600">
            ({products.length})
          </span>
        </h1>
        <p className="text-sm text-gray-500">
          Products 1–3 are generated at build time via{' '}
          <code className="text-gray-400">generateStaticParams</code>. Products
          4–9 are discovered at request time. Type a suffix to create new slugs.
        </p>
        <SuffixProvider>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {preRendered.map((product) => (
              <Link
                key={product.id}
                href={`/partial-fallbacks/${product.id}`}
                className="group"
              >
                <ProductCard product={product} animateEnter={true} />
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-gray-100">
                    {product.name}
                  </span>
                  <span className="rounded-full bg-green-900/50 px-2 py-0.5 text-[10px] font-medium text-green-400">
                    build time
                  </span>
                </div>
              </Link>
            ))}
            <RuntimeProducts products={runtime} />
          </div>
        </SuffixProvider>
      </div>
    </Boundary>
  );
}
