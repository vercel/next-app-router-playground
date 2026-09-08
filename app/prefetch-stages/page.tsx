import db, { type Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';

export default function Page() {
  const product = db.product.findMany({ limit: 1 })[0];

  return (
    <Boundary label="page.tsx (statically inferred)">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">
          Available Products{' '}
          <span className="font-mono tracking-tighter text-gray-600">(1)</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProductLink product={product} />
        </div>
      </div>
    </Boundary>
  );
}

function ProductLink({ product }: { product: Product }) {
  return (
    <Link href="/prefetch-stages/product" prefetch={true}>
      <Boundary
        label="await prefetch() → await navigation()"
        size="small"
        animateRerendering={false}
      >
        <ProductCard product={product} animateEnter={true} />
        <div className="mt-4">
          <div className="font-medium text-gray-300 group-hover:text-white">
            {product.name}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {
              '<Link prefetch={true}> includes recommendations, while more products wait for navigation.'
            }
          </p>
        </div>
      </Boundary>
    </Link>
  );
}
