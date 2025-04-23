import { Tabs } from '#/ui/tabs';
import React from 'react';

const title = 'Streaming';

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
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <Tabs
          basePath="/streaming"
          items={[
            { text: 'Home' },
            {
              text: 'Node.js Runtime',
              slug: 'node/product/1',
              segment: 'node',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}
