import { getCategory } from '#/app/api/categories/getCategories';
import { SkeletonCard } from '#/ui/skeleton-card';

export default async function Page(props: {
  params: Promise<{ categorySlug: string }>;
}) {
  const params = await props.params;
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-gray-300">
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
