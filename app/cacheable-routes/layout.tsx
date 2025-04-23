import React from 'react';
import Readme from './readme.mdx';
import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';

const demo = getDemoMeta('cacheable-routes');

export const metadata = {
  title: demo.name,
  openGraph: {
    title: demo.name,
    images: [`/api/og?title=${demo.name}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  'use cache';

  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Prose collapsed={true}>
          <Readme />
        </Prose>
      </Boundary>

      <Boundary
        label="layout.tsx (Cacheable)"
        kind="solid"
        animateRerendering={false}
      >
        {children}
      </Boundary>
    </>
  );
}
