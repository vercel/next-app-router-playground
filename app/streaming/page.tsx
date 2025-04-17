import Readme from './readme.mdx';
import { Prose } from '#/ui/prose';

export default async function Page() {
  return (
    <Prose>
      <Readme />
    </Prose>
  );
}
