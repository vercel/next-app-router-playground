'use cache';

import { getSections } from '#/app/_internal/data';
import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import { Tabs } from '#/ui/tabs';
import { type Metadata } from 'next';
import Readme from './readme.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = getDemoMeta('loading');

  return {
    title: demo.name,
    openGraph: {
      title: demo.name,
      images: [`/api/og?title=${demo.name}`],
    },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const demo = getDemoMeta('loading');
  const sections = getSections();

  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={Readme} collapsed={true} />
      </Boundary>

      <Boundary
        label="layout.tsx"
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-9"
      >
        <Tabs
          basePath={`/${demo.slug}`}
          items={[
            { text: 'Home' },
            ...sections.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        {children}
      </Boundary>
    </>
  );
}
