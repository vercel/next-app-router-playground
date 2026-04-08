import { Boundary } from '#/ui/boundary';
import { ProductSkeleton } from './page';

export default function Loading() {
  return (
    <Boundary label="[slug]/page.tsx (Cacheable)">
      <ProductSkeleton />
    </Boundary>
  );
}
