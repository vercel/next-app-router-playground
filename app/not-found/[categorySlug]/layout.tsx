import { fetchCategoryBySlug } from '#/lib/get-categories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import { notFound } from 'next/navigation';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await fetchCategoryBySlug(params.categorySlug);

  // If this category is not found, render `not-found.tsx` in the
  // closest **parent** segment.
  if (!category) notFound();
  // Note: Unlike `notFound()` in page.js, a `notFound()` in
  // `layout.js` will **not** render the `not-found.tsx` file
  // in the same segment.
  // Learn more: https://beta.nextjs.org/docs/routing/fundamentals#component-hierarchy.

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/not-found/${category.slug}`}
            items={[
              {
                text: 'All',
              },
              ...category.items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              {
                text: 'Subcategory That Does Not Exist',
                slug: 'does-not-exist',
              },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
