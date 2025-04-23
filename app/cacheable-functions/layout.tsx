import React from 'react';
import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';
import Readme from './readme.mdx';

const demo = getDemoMeta('cacheable-components');

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
  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Prose collapsed={true}>
          <Readme />
        </Prose>
      </Boundary>

      <Boundary
        label="layout.tsx (dynamic)"
        kind="solid"
        animateRerendering={false}
      >
        {children}
      </Boundary>
    </>
  );
}
