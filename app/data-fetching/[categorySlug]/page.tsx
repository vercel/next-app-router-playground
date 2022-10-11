import { type PageParams } from '@/lib/getCategories';
import { getCategoryBySlug } from '@/lib/getCategoryBySlug';
import { getProductsByCategory } from '@/lib/getProductsByCategory';
import { ProductCard } from '@/ui/ProductCard';
import { experimental_use as use } from 'react';

async function getTopics() {
  let topics = await fetch(`api.nexttok.com/topics`);
  return topics.json();
}

export default function Layout() {
  const topics = use(getTopics());
  // ...
}

export default function Page({ params }: { params: PageParams }) {
  const category = use(getCategoryBySlug(params.subCategorySlug));
  const products = use(getProductsByCategory(params.subCategorySlug));

  if (!category) throw new Error('Category not found');
  if (!products) throw new Error('No products found');

  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">
        All {category.name}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
