import {
  ProductDetails,
  ProductDetailsSkeleton,
  Recommendations,
  RecommendationsSkeleton,
  getProduct,
  getSessionRecommendations,
} from '#/app/prefetch-stages/_components/product';
import { Boundary } from '#/ui/boundary';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { unstable_prefetch as prefetch } from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

const productId = '2';
const productLabel = '<ProductDetails> (App Shell)';
const recommendationsLabel =
  '<Recommendations> (Private Cache + Not in App Shell)';

export default function Page() {
  return (
    <Boundary label="page.tsx (App Shell)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <BackLink />
        <Suspense fallback={<ProductDetailsSkeleton label={productLabel} />}>
          <AppShellProduct />
        </Suspense>
        <Suspense
          fallback={<RecommendationsSkeleton label={recommendationsLabel} />}
        >
          <RecommendationsAfterPrefetch />
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

async function RecommendationsAfterPrefetch() {
  const sessionId = (await cookies()).get('session-id')?.value ?? 'guest';
  await prefetch();

  const products = await getSessionRecommendations(productId, sessionId);
  return <Recommendations products={products} label={recommendationsLabel} />;
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
