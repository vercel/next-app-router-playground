import React from 'react';
import { type Metadata } from 'next';
import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';
import Readme from './readme.mdx';
import { Mdx } from '#/ui/codehike';

export async function generateMetadata(): Promise<Metadata> {
  const demo = getDemoMeta('route-groups');

  return {
    title: demo.name,
    openGraph: {
      title: demo.name,
      images: [`/api/og?title=${demo.name}`],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={Readme} collapsed={true} />
      </Boundary>

      <Boundary kind="solid" animateRerendering={false}>
        {children}
      </Boundary>
    </>
  );
}
