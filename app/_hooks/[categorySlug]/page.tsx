import { getCategory } from '#/app/api/categories/getCategories';
import { HooksClient } from '#/app/_hooks/_components/router-context';

export default async function Page(props: {
  params: Promise<{ categorySlug: string }>;
}) {
  const params = await props.params;
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <div className="space-y-9">
      <h1 className="text-xl font-semibold text-gray-300">
        All {category.name}
      </h1>

      <HooksClient />
    </div>
  );
}
