import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';
import { DefaultTags } from '#/ui/DefaultTags';
import { getPostData } from '#/lib/post';

export default async function Head({ params }: PageProps) {
  const postData = await getPostData(params.id)

  const title = `${postData?.title} | Next.js App Directory`;
  const description = `The best fictional ${postData?.title} money can buy.`;

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
