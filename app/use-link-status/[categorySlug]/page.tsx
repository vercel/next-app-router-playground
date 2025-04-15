import type { Category } from '#/app/api/categories/category';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page(props: {
  params: Promise<{ categorySlug: string }>;
}) {
  // DEMO: We add an artificial delay to better demonstrate pending states.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const params = await props.params;
  const res = await fetch(
    `https://app-playground-api.vercel.app/api/categories?slug=${params.categorySlug}`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const category = (await res.json()) as Category;

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
