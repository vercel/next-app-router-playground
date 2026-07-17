import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import { locale } from 'next/root-params';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const currentLocale = await locale();
  const limit = currentLocale === 'fr' ? 2 : 3;

  return db.product.findMany({ limit }).map((product) => ({ id: product.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const currentLocale = await locale();
  const isFrench = currentLocale === 'fr';
  const { id } = await params;
  const product = db.product.find({ where: { id } });

  if (!product) {
    notFound();
  }

  return (
    <Boundary label="[id]/page.tsx">
      <div className="flex flex-col gap-6">
        <Link
          href={`/${currentLocale}/root-params`}
          className="text-sm font-medium text-gray-400 hover:text-white"
        >
          {isFrench ? 'Retour aux paramètres racine' : 'Back to root params'}
        </Link>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <ProductCard product={product} />
          <Boundary
            label="generateStaticParams()"
            size="small"
            className="flex flex-col gap-3"
          >
            <h1 className="text-xl font-semibold text-gray-300">
              {isFrench ? 'Paramètres statiques pour' : 'Static params for'}{' '}
              {currentLocale}
            </h1>
            <p className="text-sm leading-6 text-gray-400">
              {isFrench ? (
                <>
                  Cette page imbriquée utilise <code>locale()</code> depuis{' '}
                  <code>next/root-params</code> dans{' '}
                  <code>generateStaticParams</code>.
                </>
              ) : (
                <>
                  This nested page uses <code>locale()</code> from{' '}
                  <code>next/root-params</code> inside{' '}
                  <code>generateStaticParams</code>.
                </>
              )}
            </p>
          </Boundary>
        </div>
      </div>
    </Boundary>
  );
}
