'use cache';

import { notFound } from 'next/navigation';
import { getProductsBySection, getSectionBySlug } from '#/app/_internal/data';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/new/product-card';

export default async function Page({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section: sectionSlug } = await params;
  const section = getSectionBySlug(sectionSlug);
  if (!section) {
    notFound();
  }

  const products = getProductsBySection(section?.id);

  return (
    <Boundary label="[section]/page.tsx">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">
          All{' '}
          <span className="font-mono tracking-tighter text-gray-600">
            ({products.length})
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
