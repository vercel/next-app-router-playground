import { getCategories } from '@/lib/getCategories';
import Counter from '@/ui/Counter.client';
import Link from 'next/link';
import React from 'react';

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
  categories: ReturnType<typeof getCategories>;
}) {
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center">
          <div className="flex space-x-3">
            <Link
              href="/layouts"
              className="rounded-full bg-zinc-700 px-3 text-sm font-medium text-zinc-100 hover:bg-pink-600 hover:text-white"
            >
              Home
            </Link>

            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/layouts/${category.slug}`}
                className="rounded-full bg-zinc-700 px-3 text-sm font-medium text-zinc-100 hover:bg-pink-600 hover:text-white"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="ml-auto">
            <Counter />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
