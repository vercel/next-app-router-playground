import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';
import BuggyButton from '#/ui/BuggyButton';
import { SkeletonCard } from '#/ui/SkeletonCard';

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-x-3">
        <h1 className="text-xl font-medium text-gray-400/80">
          All {category.name}
        </h1>

        <BuggyButton />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
