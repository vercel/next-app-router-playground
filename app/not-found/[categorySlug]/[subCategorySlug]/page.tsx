import { fetchSubCategory } from '#/lib/get-categories';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { categorySlug: string; subCategorySlug: string };
}) {
  const category = await fetchSubCategory(
    params.categorySlug,
    params.subCategorySlug,
  );

  // If this category does not exist, render `not-found.tsx` in the
  // **same** segment, if it exists, or closest parent segment, if
  // it does not.
  if (!category) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
