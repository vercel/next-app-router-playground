import { notFound } from 'next/navigation';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import db from '#/lib/db';

export async function generateStaticParams() {
  const categories = db.category.findMany();
  return categories.map((category) => {
    const section = db.section.find({ where: { id: category.section } });
    if (!section) {
      throw new Error(`Missing section for category "${category.slug}"`);
    }

    return { section: section.slug, category: category.slug };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ section: string; category: string }>;
}) {
  'use cache';

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { category: categorySlug } = await params;
  const category = db.category.find({ where: { slug: categorySlug } });
  if (!category) {
    notFound();
  }

  const products = db.product.findMany({ where: { category: category.id } });

  return (
    <Boundary label="[section]/[category]/page.tsx">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">
          All{' '}
          <span className="font-mono tracking-tighter text-gray-600">
            ({products.length})
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              animateEnter={true}
            />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
