import { db } from '@/lib/db';
import { TabNav } from '@/ui/TabNav';
import { experimental_use as use } from 'react';

const getCategory = async (categorySlug: string) => {
  try {
    return db
      .selectFrom('Category')
      .where('Category.slug', '=', categorySlug)
      .select(['Category.name', 'Category.slug'])
      .executeTakeFirst();
  } catch (error) {
    console.log(error);
  }
};

export const SubCategoryNav = ({
  basePath,
  categorySlug,
}: {
  basePath: string;
  categorySlug: string;
}) => {
  const parentCategory = use(getCategory(categorySlug));

  if (!parentCategory) throw new Error('Category not found');

  const categories = use(
    db
      .selectFrom('Category as childCategory')
      .innerJoin(
        'Category as parentCategory',
        'parentCategory.id',
        'childCategory.parentId',
      )
      .where('parentCategory.slug', '=', categorySlug)
      .select(['childCategory.slug', 'childCategory.name'])
      .execute(),
  );

  return (
    <TabNav
      baseLabel="All"
      basePath={`${basePath}/${parentCategory.slug}`}
      items={categories}
    />
  );
};
