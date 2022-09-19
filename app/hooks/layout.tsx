import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import ClickCounter from '@/ui/ClickCounter';
import HooksClient from '@/ui/HooksClient';
import HooksServer from '@/ui/HooksServer';
import React from 'react';
import CategoryNav from './CategoryNav';

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
        <ClickCounter />
      </div>

      <Boundary labels={['Client Component Hooks']}>
        <HooksClient />
      </Boundary>
      <Boundary labels={['Server Component Hooks']}>
        <HooksServer />
      </Boundary>

      <div>{children}</div>
    </div>
  );
}
