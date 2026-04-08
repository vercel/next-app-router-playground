import { Boundary } from '#/ui/boundary';
import { ProductCardSkeleton } from '#/ui/product-card';

export default function Loading() {
  return (
    <Boundary label="[slug]/page.tsx (Cacheable)">
      <Boundary label="<Suspense fallback>" size="small" color="orange">
        <div className="flex flex-col gap-6">
          <div className="h-4 w-32 rounded bg-gray-800" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductCardSkeleton />
            <div className="flex flex-col justify-center gap-4">
              <div className="h-7 w-48 rounded bg-gray-800" />
              <div className="h-5 w-24 rounded bg-gray-800" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-gray-800" />
                <div className="h-3 w-3/4 rounded bg-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </Boundary>
    </Boundary>
  );
}
