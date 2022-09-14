// @ts-ignore
import { experimental_use as use } from 'react'
import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

const fetchCategory = async (categorySlug: string | undefined): Promise<Category | undefined> => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const category = getCategories().find(
    (category) => category.slug === categorySlug,
  )

  return category
};

export default function Page({ params } : { params: { [key: string]: string } }) {
  const category = use(fetchCategory(params.categorySlug))

  return (
    <Boundary>
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>

        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: category.count }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
