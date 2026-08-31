import db, { type Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';

export default async function Page() {
  'use cache';

  const products = db.product.findMany({ limit: 2 });

  return (
    <Boundary label="page.tsx (statically inferred)">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">
          Available Products{' '}
          <span className="font-mono tracking-tighter text-gray-600">
            ({products.length})
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProductLink product={products[0]} stage="navigation" />
          <ProductLink product={products[1]} stage="prefetch" />
        </div>
      </div>
    </Boundary>
  );
}

function ProductLink({
  product,
  stage,
}: {
  product: Product;
  stage: 'navigation' | 'prefetch';
}) {
  const isNavigation = stage === 'navigation';

  return (
    <Link
      href={`/prefetch-stages/await-${stage}/${product.id}`}
      prefetch={isNavigation ? true : undefined}
    >
      <Boundary
        label={isNavigation ? 'await navigation()' : 'await prefetch()'}
        size="small"
        animateRerendering={false}
      >
        <ProductCard product={product} animateEnter={true} />
        <div className="mt-4">
          <div className="font-medium text-gray-300 group-hover:text-white">
            {product.name}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {isNavigation
              ? '<Link prefetch={true}> prefetches the product, but not its recommendations.'
              : 'A default <Link> prefetches the App Shell without the product details.'}
          </p>
        </div>
      </Boundary>
    </Link>
  );
}
