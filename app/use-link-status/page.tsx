import Readme from './readme.mdx';
import { Prose } from '#/ui/prose';

export const dynamic = 'force-dynamic';

export default async function Page() {
  // DEMO: We add an artificial delay to better demonstrate pending states.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Prose>
      <Readme />
    </Prose>
  );
}
