import { getCategories } from '#/app/api/categories/getCategories';
import { LayoutHooks } from '#/app/_hooks/_components/router-context-layout';
import { ClickCounter } from '#/ui/click-counter';
import { Tabs } from '#/ui/tabs';
import React from 'react';

const title = 'Hooks';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
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
        <Tabs
          basePath="/hooks"
          items={[
            { text: 'Home' },
            ...categories.map((x) => ({ text: x.name, slug: x.slug })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <LayoutHooks />

      <div>{children}</div>
    </div>
  );
}
