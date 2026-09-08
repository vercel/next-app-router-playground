import {
  ProductDetails,
  ProductDetailsSkeleton,
  Recommendations,
  RecommendationsSkeleton,
  getMoreProducts,
  getProduct,
  getSessionRecommendations,
} from '#/app/prefetch-stages/_components/product';
import { Boundary } from '#/ui/boundary';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import {
  unstable_navigation as navigation,
  unstable_prefetch as prefetch,
} from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

const productId = '1';
const productLabel = '<ProductDetails> (Cacheable + App Shell)';
const prefetchedLabel = '<Recommendations> (Private Cache + Per-Link Prefetch)';
const navigationLabel = '<MoreProducts> (Cacheable + Navigation Only)';

export default function Page() {
  return (
    <Boundary label="page.tsx (App Shell)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <BackLink />
        <Suspense fallback={<ProductDetailsSkeleton label={productLabel} />}>
          <AppShellProduct />
        </Suspense>
        <Suspense
          fallback={<RecommendationsSkeleton label={prefetchedLabel} />}
        >
          <PrefetchedRecommendations />
        </Suspense>
        <Suspense
          fallback={
            <RecommendationsSkeleton
              label={navigationLabel}
              heading="More products"
            />
          }
        >
          <NavigationOnlyProducts />
        </Suspense>
      </div>
    </Boundary>
  );
}

async function AppShellProduct() {
  const product = await getProduct(productId);

  if (!product) notFound();

  return <ProductDetails product={product} label={productLabel} />;
}

async function PrefetchedRecommendations() {
  const sessionId = (await cookies()).get('session-id')?.value ?? 'guest';
  await prefetch();

  const products = await getSessionRecommendations(productId, sessionId);
  return <Recommendations products={products} label={prefetchedLabel} />;
}

async function NavigationOnlyProducts() {
  await navigation();

  const products = await getMoreProducts(productId);
  return (
    <Recommendations
      products={products}
      label={navigationLabel}
      heading="More products"
    />
  );
}

function BackLink() {
  return (
    <Link
      href="/prefetch-stages"
      className="flex items-center gap-2 font-medium text-gray-300 hover:text-white"
    >
      <ChevronLeftIcon className="size-6 text-gray-600" />
      <div>Products</div>
    </Link>
  );
}
