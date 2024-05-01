import { getCategories } from '#/app/api/categories/getCategories';
import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Nested Layouts';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <Boundary labels={['@breadcrumbs']}>{breadcrumbs}</Boundary>

      <div className="flex justify-between">
        <TabGroup
          path="/breadcrumbs"
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
