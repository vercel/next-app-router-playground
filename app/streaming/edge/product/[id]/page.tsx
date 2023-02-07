import { Ping } from '#/ui/Ping';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from 'app/streaming/_components/RecommendedProducts';
import { Reviews, ReviewsSkeleton } from 'app/streaming/_components/Reviews';
import { SingleProduct } from 'app/streaming/_components/SingleProduct';
import { Suspense } from 'react';

export const runtime = 'experimental-edge';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      {/* @ts-expect-error Async Server Component */}
      <SingleProduct
        data={fetch(`https://app-dir.vercel.app/api/products?id=${params.id}`)}
      />

      <div className="relative">
        <div className="absolute top-2 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedProducts
          path="/streaming/edge/product"
          data={fetch(
            // We intentionally delay the reponse to simulate a slow data
            // request that would benefit from streaming
            `https://app-dir.vercel.app/api/products?delay=500&filter=${params.id}`,
          )}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute top-2 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Reviews
          data={fetch(
            // We intentionally delay the reponse to simulate a slow data
            // request that would benefit from streaming
            `https://app-dir.vercel.app/api/reviews?delay=1000`,
          )}
        />
      </Suspense>
    </div>
  );
}
