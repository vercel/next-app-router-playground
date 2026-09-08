import db, { type Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard, ProductCardSkeleton } from '#/ui/product-card';
import { cacheLife } from 'next/cache';

export async function getProduct(id: string) {
  'use cache';
  cacheLife('hours');

  // DEMO: Add a delay to simulate a slow data request
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.product.find({ where: { id } });
}

export async function getSessionRecommendations(
  productId: string,
  sessionId: string,
) {
  'use cache: private';
  cacheLife('hours');

  // DEMO: Add a delay to simulate a slow data request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const products = db.product
    .findMany({ limit: 4 })
    .filter((product) => product.id !== productId);
  const offset =
    Math.abs(
      sessionId.split('').reduce((hash, character) => {
        return character.charCodeAt(0) + ((hash << 5) - hash);
      }, 0),
    ) % products.length;

  return [...products.slice(offset), ...products.slice(0, offset)].slice(0, 2);
}

export async function getMoreProducts(
  sessionId: string,
  example: 'auto' | 'full',
) {
  'use cache: private';
  cacheLife('hours');

  // DEMO: Add a delay to simulate a slow data request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const products = db.product.findMany({ limit: 6 });
  const seed = `${sessionId}:${example}`;
  const offset =
    Math.abs(
      seed.split('').reduce((hash, character) => {
        return character.charCodeAt(0) + ((hash << 5) - hash);
      }, 0),
    ) % products.length;

  return [...products.slice(offset), ...products.slice(0, offset)].slice(0, 2);
}

export function ProductDetails({
  product,
  label,
}: {
  product: Product;
  label: string;
}) {
  return (
    <Boundary label={label} size="small" animateRerendering={false}>
      <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-4">
        <ProductCard product={product} compact />
        <div className="flex min-w-0 flex-col justify-center gap-2">
          <h1 className="text-xl font-semibold text-gray-200">
            {product.name}
          </h1>
          <p className="font-mono text-sm text-gray-400">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Boundary>
  );
}

export function Recommendations({
  products,
  label = '<Recommendations> (Cacheable + Navigation Only)',
  heading = 'Recommendations',
}: {
  products: Product[];
  label?: string;
  heading?: string;
}) {
  return (
    <Boundary label={label} size="small" animateRerendering={false}>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-300">{heading}</h2>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </Boundary>
  );
}

export function RecommendationsSkeleton({
  label = '<Recommendations> (Cacheable + Navigation Only)',
  heading = 'Recommendations',
  count = 2,
}: {
  label?: string;
  heading?: string;
  count?: number;
}) {
  return (
    <Boundary
      label={label}
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-300">{heading}</h2>
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
