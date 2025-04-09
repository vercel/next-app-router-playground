import Readme from './readme.mdx';

export const dynamic = 'force-dynamic';

export default async function Page() {
  // DEMO: We add an artificial delay to better demonstrate pending states.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <Readme />
    </div>
  );
}
