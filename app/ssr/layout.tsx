import { TabGroup } from '#/ui/TabGroup';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
  if (!ids) return null;

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/ssr"
          items={[
            {
              text: 'Home',
            },
            ...ids.map((x) => ({
              text: `Post ${x.id}`,
              slug: x.id,
            })),
          ]}
        />
        <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
