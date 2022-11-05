import { fetchCategoryBySlug, PageProps } from '#/lib/getCategories';
import { Boundary } from '#/ui/Boundary';
import { Counter } from '../ClickCounter';

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <div className="text-xl font-medium text-zinc-500">
          All {category.name}
        </div>

        <Counter />
      </div>
    </Boundary>
  );
}
