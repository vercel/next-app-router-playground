import db, { type Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard, ProductCardSkeleton } from '#/ui/product-card';
import { SkeletonText } from '#/ui/skeleton';
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

  return [...products.slice(offset), ...products.slice(0, offset)].slice(0, 3);
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
      <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-4">
        <ProductCard product={product} compact />
        <div className="flex min-w-0 flex-col justify-center gap-2">
          <h1 className="text-xl font-semibold text-gray-200">
            {product.name}
          </h1>
          <p className="font-mono text-sm text-gray-400">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">Included in the App Shell.</p>
        </div>
      </div>
    </Boundary>
  );
}

export function ProductDetailsSkeleton({ label }: { label: string }) {
  return (
    <Boundary
      label={label}
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-4">
        <ProductCardSkeleton />
        <div className="flex flex-col justify-center gap-[1.1em] text-xs text-gray-800">
          <SkeletonText count={1} minLength={3} maxLength={12} />
          <SkeletonText count={1} minLength={12} maxLength={18} />
          <SkeletonText count={1} minLength={12} maxLength={18} />
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
        <div className="grid grid-cols-3 gap-3">
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
}: {
  label?: string;
  heading?: string;
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
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
