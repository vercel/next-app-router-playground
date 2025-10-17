import { Suspense } from 'react';
import { ProductGrid, ProductListSkeleton } from './_components/product-grid';
import { Boundary } from '#/ui/boundary';

export default function Page() {
  return (
    <Boundary label="page.tsx (statically inferred)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
    </Boundary>
  );
}
