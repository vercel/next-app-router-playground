import { Boundary } from '#/ui/boundary';
import { ProductDetail } from '../../_components/product-detail';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Boundary label="page.tsx (details)" animateRerendering={false}>
      <ProductDetail params={params} />
    </Boundary>
  );
}
