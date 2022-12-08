import { fetchSubCategory, PageProps } from '#/lib/getCategories';
import BuggyButton from '#/ui/BuggyButton';
import { SkeletonCard } from '#/ui/SkeletonCard';

export default async function Page({ params }: PageProps) {
  const category = await fetchSubCategory(
    params.categorySlug,
    params.subCategorySlug,
  );
  if (!category) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-between  space-x-3">
        <h1 className="text-xl font-medium text-gray-400/80">
          {category.name}
        </h1>

        <BuggyButton />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
