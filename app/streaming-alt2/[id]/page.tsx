import products from '@/lib/data/products';
import { Suspense } from 'react';
import { Product } from './Product';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from './RecommendedProducts';
import { Reviews, ReviewsSkeleton } from './Reviews';

export default async function Page({ params }: { params: any }) {
  const id = params.id;

  return (
    <div className="space-y-16">
      <div>
        <Product product={products[Number(id)]} />
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
