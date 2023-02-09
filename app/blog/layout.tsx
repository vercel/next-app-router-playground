import { TabGroup } from '#/ui/TabGroup';
import React from 'react';
import { getSortedPostsData } from '#/lib/post';

export default function Layout({ children }: { children: React.ReactNode }) {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-9">
      <TabGroup
        path="/blog"
        items={[
          {
            text: '首页',
          },
          ...allPostsData.map((x) => ({
            text: `${x.title}`,
            slug: x.id,
          })),
        ]}
      />

      <div>{children}</div>
    </div>
  );
}
