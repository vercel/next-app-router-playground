import { Tab } from '#/ui/Tab';
import React from 'react';
import { RandomPostTab } from './RandomPostTab';

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = '/ssg';
  const posts = [
    { text: 'Post 1', slug: '1' },
    { text: 'Post 2', slug: '2' },
  ];

  return (
    <div className="space-y-9">
      <div className="-mt-2 flex flex-wrap items-center">
        <Tab path={path} item={{ text: 'Home' }} />

        {posts.map((item) => (
          <Tab key={item.slug} path={path} item={item} />
        ))}

        <RandomPostTab path={path} />
      </div>

      <div>{children}</div>
    </div>
  );
}
