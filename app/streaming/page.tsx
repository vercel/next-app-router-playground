import { SkeletonCard } from '@/ui/SkeletonCard';
import { Suspense } from 'react';
import Description from './description';
import ProductHeader from './product-header';
import BuyNow from './buy-now';

export default function Posts() {
  return (
    <section>
      <div className="text-white">
        <div className="space-y-4">
          <div className="flex space-x-6">
            <div className="w-full space-y-4">
              <Suspense fallback={<SkeletonCard isLoading={true} />}>
                {/* @ts-ignore */}
                <ProductHeader />
              </Suspense>
              <Suspense fallback={<SkeletonCard isLoading={true} />}>
                {/* @ts-ignore */}
                <Description />
              </Suspense>
            </div>
            <div className="min-w-[250px]">
              <Suspense
                fallback={
                  <div className="h-40 w-full ">
                    <SkeletonCard isLoading={true} />
                  </div>
                }
              >
                {/* @ts-ignore */}
                <BuyNow />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
