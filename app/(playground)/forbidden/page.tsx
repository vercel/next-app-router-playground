import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import { type Metadata } from 'next';
import Forbidden from './forbidden';
import Readme from './readme.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = db.demo.find({ where: { slug: 'forbidden' } });

  return {
    title: demo.name,
    openGraph: { title: demo.name, images: [`/api/og?title=${demo.name}`] },
  };
}

export default function Page() {
  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={Readme} collapsed={true} />
      </Boundary>

      <Boundary label="page.tsx" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-gray-300">Team settings</h1>
          <p className="text-sm text-gray-400">
            This route renders the fallback UI from <code>forbidden.tsx</code>.
            In an app, Next.js renders this file when <code>forbidden()</code>{' '}
            is thrown.
          </p>
        </div>

        <Forbidden />
      </Boundary>
    </>
  );
}
