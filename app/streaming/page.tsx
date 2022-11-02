import { SkeletonCard } from '@/ui/SkeletonCard';
import { Suspense } from 'react';
import Description from './description';
import ProductHeader from './product-header';
import BuyNow from './buy-now';
import { ExplanationBlock } from 'app/ExplanationBlock';

export default function Posts() {
  return (
    <section>
      <div className="text-white">
        <div className="space-y-4">
          <div className="flex space-x-6">
            <div className="w-full space-y-4">
              <Suspense
                fallback={
                  <div className="w-full ">
                    <SkeletonCard isLoading={true} />
                  </div>
                }
              >
                <ProductHeader />
              </Suspense>
              <Suspense
                fallback={
                  <div className="w-full ">
                    <SkeletonCard isLoading={true} />
                  </div>
                }
              >
                <Description />
              </Suspense>
            </div>
            <div className="min-w-[250px]">
              <Suspense
                fallback={
                  <div className="w-full ">
                    <SkeletonCard isLoading={true} />
                  </div>
                }
              >
                <BuyNow />
              </Suspense>
            </div>
          </div>
          <ExplanationBlock
            description="Streaming allows you to incrementally send UI from the server to
              client, progressively rendering components and pages. React
              Suspense boundaries enable granular loading UI for data fetching.
              Next.js will render content on the server and progressively send
              updates through HTTP streams to the client. A Suspense boundary
              wraps a React component. While the component rendering is
              suspended, the fallback for the Suspense boundary will be shown."
            link="https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense"
          />
        </div>
      </div>
    </section>
  );
}
