import { getProduct } from '../_lib/product';
import { Boundary } from '#/ui/boundary';
import { ProductCard, ProductCardSkeleton } from '#/ui/product-card';
import { notFound } from 'next/navigation';

export async function Product({
  id,
  example,
}: {
  id: string;
  example: string;
}) {
  const { product, cachedAt } = await getProduct(id, example);
  if (!product) notFound();

  return (
    <Boundary
      label="Product (use cache)"
      color="blue"
      animateRerendering={false}
    >
      <div data-testid="product" className="grid gap-6 sm:grid-cols-2">
        <ProductCard product={product} compact />
        <div className="space-y-3">
          <h2 className="text-xl font-medium text-gray-200">{product.name}</h2>
          <p className="text-gray-400">${product.price.toFixed(2)}</p>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-gray-500">Route parameter</dt>
              <dd
                data-testid="resolved-id"
                className="font-mono break-all text-gray-300"
              >
                {id}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Data cached at</dt>
              <dd
                data-testid="cached-at"
                className="font-mono break-all text-gray-300"
              >
                {cachedAt}
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-500">
            The timestamp belongs to the cached query, not the page render.
          </p>
        </div>
      </div>
    </Boundary>
  );
}

export function ProductSkeleton() {
  return (
    <Boundary
      label="Product fallback"
      color="orange"
      animateRerendering={false}
    >
      <div
        data-testid="product-fallback"
        role="status"
        className="grid gap-6 sm:grid-cols-2"
      >
        <ProductCardSkeleton />
        <p className="text-sm text-gray-400">Loading product…</p>
      </div>
    </Boundary>
  );
}
