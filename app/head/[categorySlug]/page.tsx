import { HeadInfo } from '#/app/head/HeadInfo';
import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-gray-500">{category.name}</div>

      <HeadInfo />
    </div>
  );
}
