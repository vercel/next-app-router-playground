import type { ParamMatching } from 'next';
import { Example } from '../../_components/example';
import { Product } from '../../_components/product';

export const unstable_paramMatching = {
  id: 'blocking',
} satisfies ParamMatching<'id'>;

export function generateStaticParams() {
  return [{ id: '1' }];
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Example mode="blocking">
      {params.then(({ id }) => (
        <Product id={id} example="blocking" />
      ))}
    </Example>
  );
}
