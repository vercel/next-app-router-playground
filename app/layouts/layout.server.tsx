import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
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
      <div className="flex items-stretch justify-between">
        <Boundary
          size="small"
          labels={['Client', '1KB']}
          color="blue"
          animateRerendering={false}
        >
          <CategoryNav categories={categories} />
        </Boundary>

        <Boundary
          size="small"
          labels={['Client', '1KB']}
          color="blue"
          animateRerendering={false}
        >
          <Counter />
        </Boundary>
      </div>

      <div>{children}</div>
    </div>
  );
}
