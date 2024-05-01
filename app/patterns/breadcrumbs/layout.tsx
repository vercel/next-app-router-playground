import { getCategories } from '#/app/api/categories/getCategories';
import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Breadcrumbs with Parallel Routes';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
  slot,
}: {
  children: React.ReactNode;
  slot: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <Boundary labels={['@breadcrumbs']}>{slot}</Boundary>

      <div className="flex justify-between">
        <TabGroup
          path="/patterns/breadcrumbs"
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
      </div>

      <Boundary>{children}</Boundary>
    </div>
  );
}
