'use cache';

import { getProducts } from '#/app/_internal/data';
import { Boundary } from '#/ui/boundary';
import BuggyButton from '#/app/error/_ui/buggy-button';
import { ProductCard } from '#/ui/new/product-card';

export default async function Page() {
  const products = getProducts({ limit: 9 });

  return (
    <Boundary label="page.tsx">
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
