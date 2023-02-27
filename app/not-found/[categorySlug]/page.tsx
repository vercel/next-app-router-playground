import { fetchCategoryBySlug } from '#/lib/get-categories';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await fetchCategoryBySlug(params.categorySlug);

  // If this category is not found, render `not-found.tsx` in the
  // **same** segment, if it exists, or closest parent segment, if
  // it does not.
  if (!category) notFound();
  // Note: In this particular segment, because `[categorySlug]/layout.tsx`
  // triggers it's own `notFound()`, the `not-found.tsx` in the parent
  // segment and not the sibling segment will be rendered. See th ecomment
  // in the Layout for an explanation.

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        All {category.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
