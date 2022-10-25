import { fetchCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import ClickCounter from '@/ui/ClickCounter';
import React from 'react';
import CategoryNav from '../CategoryNav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  return (
    <Boundary
      labels={['marketing layout']}
      color="violet"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex items-center justify-between">
          <CategoryNav categories={categories} />
          <ClickCounter />
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
