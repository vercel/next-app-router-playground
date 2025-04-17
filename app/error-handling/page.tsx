import Readme from './readme.mdx';
import { Prose } from '#/ui/prose';
import BuggyButton from '#/ui/buggy-button';

export default function Page() {
  return (
    <Prose>
      <Readme />
      <BuggyButton />
    </Prose>
  );
}
