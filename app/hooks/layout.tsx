import { getCategories } from '#/app/api/categories/getCategories';
import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import HooksClient from '#/ui/hooks-client';
import HooksServer from '#/ui/hooks-server';
import { TabGroup } from '#/ui/tab-group';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: 'Hooks',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/hooks"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <Boundary labels={['Client Component Hooks']}>
        <HooksClient />
      </Boundary>
      <Boundary labels={['Server Component Hooks']}>
        <HooksServer />
      </Boundary>

      <div>{children}</div>
    </div>
  );
}
