import {
  ProductDetails,
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

const productLabel = '<ProductDetails> (App Shell)';
const moreProductsLabel = '<MoreProducts> (Prefetch)';
const recommendationsLabel = '<Recommendations> (Navigation)';

export function StagedProductPage({
  productId,
  example,
}: {
  productId: string;
  example: 'auto' | 'full';
}) {
  return (
    <Boundary label="page.tsx (App Shell)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <BackLink />
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <AppShellProduct productId={productId} />
          <Suspense fallback={<ContentAfterPrefetchFallback />}>
            <ContentAfterPrefetch productId={productId} example={example} />
          </Suspense>
        </div>
      </div>
    </Boundary>
  );
}

async function AppShellProduct({ productId }: { productId: string }) {
  const product = await getProduct(productId);

  if (!product) notFound();

  return <ProductDetails product={product} label={productLabel} />;
}

async function ContentAfterPrefetch({
  productId,
  example,
}: {
  productId: string;
  example: 'auto' | 'full';
}) {
  const sessionId = (await cookies()).get('session-id')?.value ?? 'guest';
  await prefetch();

  return (
    <>
      <Suspense
        fallback={
          <RecommendationsSkeleton
            label={moreProductsLabel}
            heading="More products"
          />
        }
      >
        <MoreProducts sessionId={sessionId} example={example} />
      </Suspense>
      <Suspense
        fallback={<RecommendationsSkeleton label={recommendationsLabel} />}
      >
        <ContentAfterNavigation productId={productId} sessionId={sessionId} />
      </Suspense>
    </>
  );
}

async function MoreProducts({
  sessionId,
  example,
}: {
  sessionId: string;
  example: 'auto' | 'full';
}) {
  const products = await getMoreProducts(sessionId, example);
  return (
    <Recommendations
      products={products}
      label={moreProductsLabel}
      heading="More products"
    />
  );
}

async function ContentAfterNavigation({
  productId,
  sessionId,
}: {
  productId: string;
  sessionId: string;
}) {
  await navigation();

  const products = await getSessionRecommendations(productId, sessionId);
  return <Recommendations products={products} label={recommendationsLabel} />;
}

function ContentAfterPrefetchFallback() {
  return (
    <>
      <RecommendationsSkeleton
        label={moreProductsLabel}
        heading="More products"
      />
      <RecommendationsSkeleton label={recommendationsLabel} />
    </>
  );
}

function BackLink() {
  return (
    <Link
      href="/prefetch-stages"
      className="flex items-center gap-2 font-medium text-gray-300 hover:text-white"
    >
      <ChevronLeftIcon className="size-6 text-gray-600" />
      <div>Prefetch stages</div>
    </Link>
  );
}
