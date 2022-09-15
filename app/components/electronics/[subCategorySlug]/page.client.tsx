import { getCategories } from '@/lib/getCategories';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

export default function Page(props: any) {
  // In production, we would not "fetch" data this way.
  const category = getCategories().find(
    (category) => category.slug === 'electronics',
  )!;
  const subCategory = category?.items.find(
    (subCategory) => subCategory.slug === props.params.subCategorySlug!,
  )!;

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
