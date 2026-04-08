'use client';

import { Product } from '#/lib/db';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'partial-fallbacks-suffix';

function generateSuffix() {
  return Math.random().toString(36).slice(2, 8);
}

export function RuntimeProducts({ products }: { products: Product[] }) {
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSuffix(stored);
    } else {
      const next = generateSuffix();
      sessionStorage.setItem(STORAGE_KEY, next);
      setSuffix(next);
    }
  }, []);

  function regenerate() {
    const next = generateSuffix();
    sessionStorage.setItem(STORAGE_KEY, next);
    setSuffix(next);
  }

  return (
    <>
      <div className="col-span-full flex items-center gap-3">
        <span className="text-sm text-gray-500">
          Suffix: <code className="text-gray-400">{suffix || '…'}</code>
        </span>
        <button
          onClick={regenerate}
          className="rounded-md border border-gray-800 px-2 py-0.5 text-xs text-gray-400 hover:border-gray-600 hover:text-gray-200"
        >
          Regenerate
        </button>
      </div>
      {products.map((product) => {
        const slug = suffix ? `${product.id}-${suffix}` : product.id;
        return (
          <Link
            key={product.id}
            href={`/partial-fallbacks/${slug}`}
            className="group"
          >
            <ProductCard product={product} animateEnter={true} />
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-300 group-hover:text-gray-100">
                {product.name}
              </span>
              <span className="rounded-full bg-orange-900/50 px-2 py-0.5 text-[10px] font-medium text-orange-400">
                request time
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
}
