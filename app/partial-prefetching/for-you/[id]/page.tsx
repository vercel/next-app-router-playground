import { Boundary } from '#/ui/boundary';
import { ProductDetail } from '../../_components/product-detail';

// Allow the prefetch to run the 'use cache: private' boundary with the
// real cookie and include the result in the prefetch payload.
export const prefetch = 'allow-runtime';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Boundary label="page.tsx (for-you)" animateRerendering={false}>
      <ProductDetail params={params} />
    </Boundary>
  );
}
