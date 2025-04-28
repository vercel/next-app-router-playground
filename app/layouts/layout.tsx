'use cache';

import React from 'react';
import { getSections } from '#/app/_internal/data';
import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { Tabs } from '#/ui/tabs';
import { type Metadata } from 'next';
import { Mdx } from '#/ui/codehike';
import readme from './readme.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = getDemoMeta('layouts');

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
  const demo = getDemoMeta('layouts');
  const sections = getSections();

  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={readme} collapsed={true} />
      </Boundary>
      <Boundary
        label="layout.tsx"
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-9"
      >
        <div className="flex justify-between">
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

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        {children}
      </Boundary>
    </>
  );
}
