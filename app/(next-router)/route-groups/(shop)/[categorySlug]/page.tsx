import { fetchCategoryBySlug, PageProps } from '#/lib/getCategories';
import { SkeletonCard } from '#/ui/SkeletonCard';

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">
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
