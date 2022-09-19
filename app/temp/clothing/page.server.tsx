import { getCategories, type Category } from '@/lib/getCategories';
import { getProducts, Product } from '@/lib/getProducts';
import { Boundary } from '@/ui/Boundary.server';
import { ProductCard } from '@/ui/ProductCard';

export const getServerSideProps = async () => {
  return {
    props: {
      category: getCategories().find(
        (category) => category.slug === 'clothing',
      ),
      products: getProducts(),
    },
  };
};
export default function Page({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  return (
    <Boundary>
      <div className="space-y-4">
        <div className="text-xl font-medium text-zinc-500">
          All {category.name}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => {
            return <ProductCard key={product.name} product={product} />;
          })}
        </div>
      </div>
    </Boundary>
  );
}
