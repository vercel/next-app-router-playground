'client'

import { getCategories } from '@/lib/getCategories';
import { SkeletonCard } from '@/ui/SkeletonCard';

export default function Page() {
  // In production, we would not "fetch" data this way.
  const category = getCategories().find(
    (category) => category.slug === 'electronics',
  )!;
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">
        All {category.name}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
