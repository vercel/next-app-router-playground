import { fetchCategoryBySlug, PageProps } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import { Counter } from '../ClickCounter';
import SubCategoryNav from '../SubCategoryNav';

export default async function Layout({ children, params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
      <div className="space-y-9">
        <SubCategoryNav category={category} />
        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
