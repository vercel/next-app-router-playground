import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/app/streaming/_components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/app/streaming/_components/reviews';
import { SingleProduct } from '#/app/streaming/_components/single-product';
import { Ping } from '#/ui/ping';
import { Suspense } from 'react';

export default async function Page() {
  const params = {
    id: '1',
  }
  return (
    <div className="space-y-8 lg:space-y-14">
      {/* @ts-expect-error Async Server Component */}
      <SingleProduct id={params.id} />

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedProducts
          path="/streaming/node/product"
          data={fetch(
            // We intentionally delay the reponse to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/products?delay=0&filter=${params.id}`,
            {
              // We intentionally disable Next.js Cache to better demo
              // streaming
              //cache: 'no-store',
            },
          )}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Reviews
          data={fetch(
            // We intentionally delay the reponse to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/reviews?delay=0`,
            {
              // We intentionally disable Next.js Cache to better demo
              // streaming
              //cache: 'no-store',
            },
          )}
        />
      </Suspense>
    </div>
  );
}

