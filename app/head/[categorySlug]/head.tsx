import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';
import { DefaultHead } from '#/ui/DefaultHead';

export default async function Head({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);

  const title = `${category?.name} | Next.js App Directory`;
  const description = `The best fictional ${category?.name} money can buy.`;

  return (
    <DefaultHead>
      <title>{title}</title>
      <meta name="description" content={description} />
    </DefaultHead>
  );
}
