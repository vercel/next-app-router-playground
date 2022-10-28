import products from '@/lib/data/products';
import { Suspense } from 'react';
import { delay } from './delay';
import { Product } from './Product';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from './RecommendedProducts';
import { Reviews, ReviewsSkeleton } from './Reviews';

export default async function Posts() {
  // Normally you would fetch data here
  await delay(1000);

  return (
    <div className="space-y-16">
      <div>
        <Product product={products[0]} />
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-ignore */}
        <RecommendedProducts />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* @ts-ignore */}
        <Reviews />
      </Suspense>
    </div>
  );
}
