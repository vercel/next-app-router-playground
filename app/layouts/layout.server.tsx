import { getCategories, type Category } from '@/lib/getCategories';
import Counter from '@/ui/Counter.client';
import React from 'react';
import CategoryNav from './CategoryNav.client';

export const getServerSideProps = () => {
  return {
    props: { categories: getCategories() },
  };
};
export default function Layout({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) {
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav categories={categories} />
        <div>
          <Counter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
