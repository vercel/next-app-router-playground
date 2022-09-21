'client'

import { fetchSubCategory, PageParams } from '@/lib/getCategories';
import { SkeletonCard } from '@/ui/SkeletonCard';
import { experimental_use as use } from 'react';

export default function Page({ params } : { params: PageParams }) {
  const subCategory = use(fetchSubCategory('electronics', params.subCategorySlug))
  if (!subCategory) return null

  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">
        {subCategory.name}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: subCategory.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
