'use cache';

import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import { type Metadata } from 'next';
import React from 'react';
import readme from './readme.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = getDemoMeta('parallel-routes');

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
  audience,
  views,
}: {
  children: React.ReactNode;
  audience: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={readme} collapsed={true} />
      </Boundary>

      <Boundary
        label="layout.tsx"
        kind="solid"
        animateRerendering={false}
        className="grid gap-6 lg:grid-cols-2"
      >
        {children}

        <div className="flex flex-col gap-6">
          {audience}
          {views}
        </div>
      </Boundary>
    </>
  );
}
