import products from '#/lib/data/products';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { Product } from '../../Product';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '../../RecommendedProducts';
import { Reviews, ReviewsSkeleton } from '../../Reviews';

export const runtime = 'experimental-edge';

export default async function Page({ params }: { params: { id: string } }) {
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = cookies().get('_cart_count')?.value || '0';

  const product = products.find((product) => {
    return product.id === params.id;
  })!;

  return (
    <div className="space-y-8 lg:space-y-14">
      <div>
        <Product product={product} cartCount={cartCount} />
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedProducts id={params.id} />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Reviews />
      </Suspense>
    </div>
  );
}
