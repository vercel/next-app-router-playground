import products from '#/lib/data/products';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { Product } from './Product';
import Button from '#/ui/Button';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from './RecommendedProducts';
import { Reviews, ReviewsSkeleton } from './Reviews';
import ServerComponent from '../ssr-vs-isr/ServerComponent';
import Link from 'next/link';

export const dynamicParams = true;

async function fetchData() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1`,
    {
      next: { revalidate: 15 },
    },
    // { cache: 'no-store' },
  );
  const data = await res.json();
  return data;
}
// async function ssrFetchData() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
//     cache: 'no-store',
//   });
//   const data = await res.json();
//   return data;
// }

export default async function Page({ searchParams }: { searchParams: any }) {
  // const data = await fetchData();
  // console.log(data);
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = cookies().get('_cart_count')?.value || '0';

  return (
    <div className="space-y-16">
      <div>
        <Product product={products[0]} cartCount={cartCount} />
      </div>

      {/* <Button
      // onClick={() => {
      //   ssrFetchData();
      // }}
      >
        Toggle SSR
      </Button> */}
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
