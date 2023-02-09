import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Category = {
  name: string;
  slug: string;
  count: number;
  items: Omit<Category, 'items'>[];
};

export const getCategories = cache((): Category[] => [
  {
    name: '电子产品',
    slug: 'electronics',
    count: 11,
    items: [
      { name: '手机', slug: 'phones', count: 4 },
      { name: '平板', slug: 'tablets', count: 5 },
      { name: '笔记本电脑', slug: 'laptops', count: 2 },
    ],
  },
  {
    name: '服装',
    slug: 'clothing',
    count: 12,
    items: [
      { name: '上衣', slug: 'tops', count: 3 },
      { name: '裤子', slug: 'shorts', count: 4 },
      { name: '鞋子', slug: 'shoes', count: 5 },
    ],
  },
  {
    name: '书籍',
    slug: 'books',
    count: 10,
    items: [
      { name: '小说', slug: 'fiction', count: 5 },
      { name: '传记', slug: 'biography', count: 2 },
      { name: '教育', slug: 'education', count: 3 },
    ],
  },
]);

export async function fetchCategoryBySlug(slug: string | undefined) {
  // Assuming it always return expected categories
  return getCategories().find((category) => category.slug === slug);
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}

async function findSubCategory(
  category: Category | undefined,
  subCategorySlug: string | undefined,
) {
  return category?.items.find((category) => category.slug === subCategorySlug);
}

export async function fetchSubCategory(
  categorySlug: string | undefined,
  subCategorySlug: string | undefined,
) {
  const category = await fetchCategoryBySlug(categorySlug);
  return findSubCategory(category, subCategorySlug);
}
