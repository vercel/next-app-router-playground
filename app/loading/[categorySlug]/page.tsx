import { fetchCategoryBySlug, type Category } from '#/lib/get-categories';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';

const fetchCategory = async (
  categorySlug: string | undefined,
): Promise<Category | undefined> => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!categorySlug) return;

  return await fetchCategoryBySlug(categorySlug);
};

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await fetchCategory(params.categorySlug);
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
