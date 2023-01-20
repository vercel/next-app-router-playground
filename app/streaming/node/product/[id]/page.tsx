import type { Product } from '#/types/Product';
import { Ping } from '#/ui/Ping';
import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '../../../_components/RecommendedProducts';
import { Reviews, ReviewsSkeleton } from '../../../_components/Reviews';
import { SingleProduct } from '../../../_components/SingleProduct';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetch(
    // you would normally fetch data from an external data source
    `https://app-dir.vercel.app/api/products?id=${params.id}`,
  );
  const product = (await data.json()) as Product;

  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct product={product} />

      <div className="relative">
        <div className="absolute top-2 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedProducts
          path="/streaming/node/product"
          productId={params.id}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute top-2 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Reviews />
      </Suspense>
    </div>
  );
}
