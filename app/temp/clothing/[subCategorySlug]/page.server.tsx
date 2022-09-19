import { getCategories } from '@/lib/getCategories';
import { getProducts, type Product } from '@/lib/getProducts';
import { Boundary } from '@/ui/Boundary.server';
import { ProductCard } from '@/ui/ProductCard';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subCategorySlug } = context.params!;

  const category = getCategories().find((x) => x.slug === 'clothing');

  const products = getProducts();

  return {
    props: {
      category: category?.items.find((x) => x.slug === subCategorySlug),
      products,
    },
  };
};

export default function Page({
  category,
  products,
}: {
  category: ReturnType<typeof getCategories>[0];
  products: Product[];
}) {
  return (
    <Boundary>
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>

        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => {
            return <ProductCard key={product.name} product={product} />;
          })}
        </div>
      </div>
    </Boundary>
  );
}
