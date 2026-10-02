'use client';

import type { Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';
import { useState } from 'react';
import { examples } from '../_lib/examples';

export function ExampleLinksClient({ product }: { product: Product }) {
  const [unlistedId, setUnlistedId] = useState('2');

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-gray-300">
          Try an unlisted product
        </h1>
        <p className="text-sm text-gray-400">
          This product exists, but its ID was not prerendered. Open it with each
          policy to compare the behavior.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {examples.map((example) => (
          <Link
            key={example.mode}
            href={`/param-matching/${example.mode}/${unlistedId}`}
            prefetch={false}
            className="group min-w-0"
          >
            <Boundary
              label={example.mode}
              labelCase="normal"
              size="small"
              animateRerendering={false}
            >
              <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5">
                <ProductCard product={product} animateEnter={true} compact />
                <div className="min-w-0">
                  <div className="flex items-center gap-3 font-medium text-gray-300 group-hover:text-white">
                    {product.name}
                    <LinkStatus />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    {example.result}
                  </div>
                </div>
              </div>
            </Boundary>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <button
          onClick={() => setUnlistedId(`2-${crypto.randomUUID().slice(0, 8)}`)}
          className="text-gray-300 underline decoration-gray-600 underline-offset-4 hover:text-white"
        >
          Try again
        </button>
        <span className="text-gray-500">with a fresh product ID.</span>
        <span className="sr-only" role="status">
          Current product ID: {unlistedId}
        </span>
      </div>
    </div>
  );
}
