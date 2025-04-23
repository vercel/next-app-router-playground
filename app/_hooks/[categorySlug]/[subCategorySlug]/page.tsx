import { getCategory } from '#/app/api/categories/getCategories';
import { HooksClient } from '#/app/_hooks/_components/router-context';

export default async function Page(props: {
  params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}) {
  const params = await props.params;
  const category = await getCategory({ slug: params.subCategorySlug });

  return (
    <div className="space-y-9">
      <h1 className="text-xl font-semibold text-gray-300">{category.name}</h1>

      <HooksClient />
    </div>
  );
}
