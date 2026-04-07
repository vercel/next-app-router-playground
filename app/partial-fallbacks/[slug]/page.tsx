'use cache';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard, ProductCardSkeleton } from '#/ui/product-card';
import { cacheLife } from 'next/cache';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Boundary label="[slug]/page.tsx (Cacheable)">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetail slug={slug} />
      </Suspense>
    </Boundary>
  );
}

async function ProductDetail({ slug }: { slug: string }) {
  'use cache';
  cacheLife({ revalidate: 3600 });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const productId = slug.split('-')[0];
  const product = db.product.find({ where: { id: productId } });
  if (!product) {
    notFound();
  }

  return (
    <Boundary label="<ProductDetail> (Cacheable)" size="small">
      <div className="flex flex-col gap-6">
        <Link
          href="/partial-fallbacks"
          className="text-sm text-gray-500 hover:text-gray-300"
        >
          ← Back to products
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductCard product={product} />
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-200">
              {product.name}
            </h1>
            <p className="font-mono text-lg text-gray-400">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">
              This page was rendered with a 2 second artificial delay. If this
              product was pre-rendered, it loaded instantly. If it was
              runtime-discovered, the behavior depends on whether{' '}
              <code className="text-gray-400">partialFallbacks</code> is
              enabled.
            </p>
          </div>
        </div>
      </div>
    </Boundary>
  );
}

function ProductSkeleton() {
  return (
    <Boundary label="<Suspense fallback>" size="small" color="orange">
      <div className="flex flex-col gap-6">
        <div className="h-4 w-32 rounded bg-gray-800" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductCardSkeleton />
          <div className="flex flex-col justify-center gap-4">
            <div className="h-7 w-48 rounded bg-gray-800" />
            <div className="h-5 w-24 rounded bg-gray-800" />
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-gray-800" />
              <div className="h-3 w-3/4 rounded bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </Boundary>
  );
}
