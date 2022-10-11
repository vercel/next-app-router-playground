import { type PageParams } from '@/lib/getCategories';
import { SubCategoryNav } from '@/ui/SubCategoryNav';
import React from 'react';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: PageParams;
}) {
  return (
    <div className="space-y-9">
      <SubCategoryNav
        basePath="data-fetching"
        categorySlug={params.categorySlug}
      />

      <div>{children}</div>
    </div>
  );
}
