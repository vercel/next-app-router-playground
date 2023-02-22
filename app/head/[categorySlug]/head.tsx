import { fetchCategoryBySlug } from '#/lib/get-categories';
import { DefaultTags } from '#/ui/default-tags';

export default async function Head({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await fetchCategoryBySlug(params.categorySlug);

  const title = `${category?.name} | Next.js App Directory`;
  const description = `The best fictional ${category?.name} money can buy.`;

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
