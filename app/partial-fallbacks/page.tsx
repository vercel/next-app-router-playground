'use cache';

import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';

const PRE_RENDERED_IDS = ['1', '2', '3'];

export default async function Page() {
  const products = db.product.findMany({ limit: 9 });

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
          Products 1–3 are pre-rendered via{' '}
          <code className="text-gray-400">generateStaticParams</code>. Products
          4–9 are discovered at runtime.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => (
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
                {PRE_RENDERED_IDS.includes(product.id) ? (
                  <span className="rounded-full bg-green-900/50 px-2 py-0.5 text-[10px] font-medium text-green-400">
                    pre-rendered
                  </span>
                ) : (
                  <span className="rounded-full bg-orange-900/50 px-2 py-0.5 text-[10px] font-medium text-orange-400">
                    runtime
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Boundary>
  );
}
