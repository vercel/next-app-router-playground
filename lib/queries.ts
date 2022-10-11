import { db } from '@/lib/db';
import { PromiseReturnType } from '@/lib/types';

export const getCategoryBySlug = async (slug: string) =>
  db
    .selectFrom('Category')
    .select('name')
    .where('slug', '=', slug)
    .call((qb) => {
      console.log('>>> getCategoryBySlug 📚');
      return qb;
    })
    .executeTakeFirst();

export const getProductsByCategory = async (slug: string) =>
  db
    .selectFrom('Product')
    .innerJoin('Category', 'Category.id', 'Product.categoryId')
    .orderBy('Product.order', 'asc')
    .selectAll('Product')
    .where('Category.slug', '=', slug)
    .call((qb) => {
      console.log('>>> getProductsByCategory 🛍️');
      return qb;
    })
    .execute();

export const getProductsByParentCategory = async (slug: string) =>
  db
    .selectFrom('Product')
    .innerJoin(
      'Category as childCategory',
      'childCategory.id',
      'Product.categoryId',
    )
    .innerJoin(
      'Category as parentCategory',
      'parentCategory.id',
      'childCategory.parentId',
    )
    .orderBy('Product.order', 'asc')
    .selectAll('Product')
    .where('parentCategory.slug', '=', slug)
    .limit(9)
    .call((qb) => {
      console.log('>>> getProductsByParentCategory 🛍️');
      return qb;
    })
    .execute();

export type ProductPayload = PromiseReturnType<typeof getProductsByCategory>[0];
