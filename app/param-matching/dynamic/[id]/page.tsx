import type { ParamMatching } from 'next';
import { Example } from '../../_components/example';
import { Product } from '../../_components/product';

export const unstable_paramMatching = {
  id: 'dynamic',
} satisfies ParamMatching<'id'>;

// Dynamic parameters are deliberately omitted from generateStaticParams.
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Example mode="dynamic">
      {params.then(({ id }) => (
        <Product id={id} example="dynamic" />
      ))}
    </Example>
  );
}
