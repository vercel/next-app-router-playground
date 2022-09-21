import { fetchCategoryBySlug, type PageParams } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';

import { experimental_use as use } from 'react';
import SubCategoryNav from './SubCategoryNav';


export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: PageParams
}) {

  const category = use(fetchCategoryBySlug(params.categorySlug))
  if (!category) return null
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center justify-between">
          <SubCategoryNav category={category} />
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
