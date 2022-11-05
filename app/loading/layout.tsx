import React from 'react';
import { fetchCategories } from '#/lib/getCategories';
import ClickCounter from '#/ui/ClickCounter';
import CategoryNav from './CategoryNav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  if (!categories) return null;

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav categories={categories} />
        <ClickCounter />
      </div>

      <div>{children}</div>
    </div>
  );
}
