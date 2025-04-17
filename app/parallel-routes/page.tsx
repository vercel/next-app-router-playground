import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';
import Readme from './readme.mdx';

export default function Page() {
  return (
    <Boundary labels={['parallel-routes/page.tsx']} size="small">
      <Prose>
        <Readme />
      </Prose>
    </Boundary>
  );
}
