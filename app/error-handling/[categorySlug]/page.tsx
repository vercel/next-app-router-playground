import { fetchCategoryBySlug } from '@/lib/getCategories';
import { type PageParams } from '@/lib/types';
import BuggyButton from '@/ui/BuggyButton';
import { SkeletonCard } from '@/ui/SkeletonCard';
import { experimental_use as use } from 'react';

export default function Page({ params }: { params: PageParams }) {
  const category = use(fetchCategoryBySlug(params.categorySlug));
  if (!category) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-between space-x-3">
        <div className="text-xl font-medium text-zinc-500">
          All {category.name}
        </div>

        <BuggyButton />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
