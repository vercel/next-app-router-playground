import products from '#/lib/data/products';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { Product } from './Product';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from './RecommendedProducts';
import { Reviews, ReviewsSkeleton } from './Reviews';

export default async function Page() {
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = cookies().get('_cart_count')?.value || '0';

  return (
    <div className="space-y-16">
      <div>
        <Product product={products[0]} cartCount={cartCount} />
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedProducts />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Reviews />
      </Suspense>
    </div>
  );
}
