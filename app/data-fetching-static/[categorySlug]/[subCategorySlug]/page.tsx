import { getCategoryBySlug, getProductsByCategory } from '@/lib/queries';
import { type PageParams } from '@/lib/types';
import { ProductCard } from '@/ui/ProductCard';
import { RenderedTimeAgo } from '@/ui/RenderedTimeAgo';

// @ts-ignore
import { experimental_use as use } from 'react';

export default function Page({ params }: { params: PageParams }) {
  const category = use(getCategoryBySlug(params.categorySlug));
  const products = use(getProductsByCategory(params.subCategorySlug));

  if (!category) throw new Error('Category not found');
  if (!products) throw new Error('No products found');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>
        <RenderedTimeAgo time={new Date().toISOString()} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
