import { getCategories } from '#/app/api/categories/getCategories';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'useLinkStatus';

export const metadata = {
  title,
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="grid gap-9">
      <TabGroup
        path="/use-link-status"
        items={[
          {
            text: 'Home',
          },
          ...categories.map((x) => ({
            text: x.name,
            slug: x.slug,
            // DEMO: We disable prefetching to better demonstrate pending states.
            prefetch: false,
          })),
        ]}
      />

      <div>{children}</div>
    </div>
  );
}
