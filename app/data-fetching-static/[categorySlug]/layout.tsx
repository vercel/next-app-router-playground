import { PageParams } from '@/lib/types';
import { RenderedTimeAgo } from '@/ui/RenderedTimeAgo';
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
      <div className="flex items-center justify-between">
        <SubCategoryNav
          basePath="data-fetching-static"
          categorySlug={params.categorySlug}
        />
        <RenderedTimeAgo time={new Date().toISOString()} />
      </div>

      <div>{children}</div>
    </div>
  );
}
