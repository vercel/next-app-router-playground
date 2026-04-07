'use client';

import { Product } from '#/lib/db';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function RuntimeLink({ product }: { product: Product }) {
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    setSuffix(Math.random().toString(36).slice(2, 8));
  }, []);

  const slug = suffix ? `${product.id}-${suffix}` : product.id;

  return (
    <Link href={`/partial-fallbacks/${slug}`} className="group">
      <ProductCard product={product} animateEnter={true} />
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm font-medium text-gray-300 group-hover:text-gray-100">
          {product.name}
        </span>
        <span className="rounded-full bg-orange-900/50 px-2 py-0.5 text-[10px] font-medium text-orange-400">
          runtime
        </span>
      </div>
    </Link>
  );
}
