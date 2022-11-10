import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';
import { ClickCounter } from '#/ui/ClickCounter';
import { TabGroup } from '#/ui/TabGroup';

export default async function Layout({ children, params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/layouts/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            ...category.items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
