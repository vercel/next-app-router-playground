'use cache';

import { notFound } from 'next/navigation';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/new/product-card';
import { getCategoryBySlug, getProductsByCategory } from '#/app/_internal/data';
import BuggyButton from '#/app/error/_ui/buggy-button';

export default async function Page({
  params,
}: {
  params: Promise<{ section: string; category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.id);

  return (
    <Boundary label="[section]/[category]/page.tsx">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold text-gray-300">
            All{' '}
            <span className="font-mono tracking-tighter text-gray-600">
              ({products.length})
            </span>
          </h1>

          <div className="flex">
            <BuggyButton />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
