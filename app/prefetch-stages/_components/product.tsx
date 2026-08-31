import db, { type Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard, ProductCardSkeleton } from '#/ui/product-card';
import { SkeletonText } from '#/ui/skeleton';
import { cacheLife, unstable_navigation as navigation } from 'next/cache';

export async function getProduct(id: string) {
  'use cache';
  cacheLife('hours');

  // DEMO: Add a delay to simulate a slow data request
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.product.find({ where: { id } });
}

export async function getRecommendations(productId: string) {
  await navigation();
  return getRecommendationsCached(productId);
}

async function getRecommendationsCached(productId: string) {
  'use cache';
  cacheLife('hours');

  // DEMO: Add a delay to simulate a slow data request
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.product
    .findMany({ limit: 4 })
    .filter((product) => product.id !== productId)
    .slice(0, 3);
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
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductCard product={product} />
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-200">
              {product.name}
            </h1>
            <p className="font-mono text-lg text-gray-400">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">
              This product was loaded by an async function using use cache.
            </p>
          </div>
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
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductCardSkeleton />
        <div className="flex flex-col justify-center gap-[1.4em] text-sm text-gray-800">
          <SkeletonText count={1} minLength={3} maxLength={12} />
          <SkeletonText count={2} minLength={26} maxLength={50} />
          <SkeletonText count={1} minLength={12} maxLength={18} />
        </div>
      </div>
    </Boundary>
  );
}

export function Recommendations({ products }: { products: Product[] }) {
  return (
    <Boundary
      label="<Recommendations> (Cacheable + Navigation Only)"
      size="small"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-300">Recommendations</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}

export function RecommendationsSkeleton() {
  return (
    <Boundary
      label="<Recommendations> (Cacheable + Navigation Only)"
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-300">Recommendations</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}
