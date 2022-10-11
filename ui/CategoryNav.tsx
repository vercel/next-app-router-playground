import { db } from '@/lib/db';
import { TabNav } from '@/ui/TabNav';
import { experimental_use as use } from 'react';

export const CategoryNav = ({ basePath }: { basePath: string }) => {
  const categories = use(
    db
      .selectFrom('Category')
      .where('Category.parentId', 'is', null)
      .select(['Category.name', 'Category.slug'])
      .execute(),
  );

  if (!categories) throw new Error('Categories not found');

  return <TabNav basePath={basePath} items={categories} />;
};
