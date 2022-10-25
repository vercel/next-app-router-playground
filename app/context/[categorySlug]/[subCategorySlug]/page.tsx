import { fetchSubCategory, type PageProps } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import { Counter } from '../../ClickCounter';

export default async function Page({ params }: PageProps) {
  const category = await fetchSubCategory(
    params.categorySlug,
    params.subCategorySlug,
  );
  if (!category) return null;

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>

        <Counter />
      </div>
    </Boundary>
  );
}
