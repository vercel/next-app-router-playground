import { Tab } from '#/ui/Tab';
import React from 'react';
import { RandomPostTab } from './RandomPostTab';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/ssg" item={{ text: 'Home' }} />
        <Tab path="/ssg" item={{ text: 'Post 1', slug: '1' }} />
        <Tab path="/ssg" item={{ text: 'Post 2', slug: '2' }} />
        <RandomPostTab path="/ssg" />
      </div>

      <div>{children}</div>
    </div>
  );
}
