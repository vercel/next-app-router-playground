import React from 'react';
import { Boundary } from '#/ui/boundary';
import { Tabs } from '#/ui/tabs';
import { getDemoMeta } from '#/app/_internal/demos';
import { getSections } from '#/app/_internal/data';

const demo = getDemoMeta('route-groups');

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = getSections().slice(0, 1);

  return (
    <Boundary label="(main)/layout.tsx" className="flex flex-col gap-9">
      <Tabs
        basePath={`/${demo.slug}`}
        items={[
          { text: 'Home' },
          ...sections.map((x) => ({ text: x.name, slug: x.slug })),
          { text: 'Checkout', slug: 'checkout' },
          { text: 'Blog', slug: 'blog' },
        ]}
      />

      <div>{children}</div>
    </Boundary>
  );
}
