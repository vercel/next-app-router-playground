import { getProducts } from '#/app/_internal/data';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/new/product-card';
import { connection } from 'next/server';

export default async function Page() {
  return (
    <Boundary label="page.tsx (dynamic)">
      <ProductList />
    </Boundary>
  );
}

async function ProductList() {
  // DEMO: indicate that we require an actual user Request before continuing.
  // Used to show the page and components can be dynamic while deeper
  // components/functions can be cacheable.
  await connection();

  const products = await getData();

  return (
    <Boundary label="<ProductList> (Dynamic)" size="small">
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

async function getData() {
  'use cache';

  // DEMO: Add a delay to simulate a slow data request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return getProducts({ limit: 9 });
}
