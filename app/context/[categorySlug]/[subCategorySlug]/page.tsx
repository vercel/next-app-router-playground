import { fetchSubCategory, type PageProps } from '#/lib/getCategories';
import { Boundary } from '#/ui/Boundary';
import { Counter } from '../../ContextClickCounter';

export default async function Page({ params }: PageProps) {
  const category = await fetchSubCategory(
    params.categorySlug,
    params.subCategorySlug,
  );
  if (!category) return null;

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-400/80">
          {category.name}
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}
