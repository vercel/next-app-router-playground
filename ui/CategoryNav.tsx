import prisma from '@/lib/prisma';
import { TabNav } from '@/ui/TabNav';
import { cache } from 'react';

export const CategoryNav = async ({ basePath }: { basePath: string }) => {
  const getCategories = cache(async () => {
    return await prisma.category.findMany({
      where: {
        parentId: null,
      },
      select: {
        name: true,
        slug: true,
      },
    });
  });

  const categories = await getCategories();

  if (!categories) throw new Error('Categories not found');

  return <TabNav basePath={basePath} items={categories} />;
};
