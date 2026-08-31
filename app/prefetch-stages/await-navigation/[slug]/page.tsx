import {
  ProductDetails,
  ProductDetailsSkeleton,
  Recommendations,
  RecommendationsSkeleton,
  getProduct,
  getRecommendations,
} from '#/app/prefetch-stages/_components/product';
import { Boundary } from '#/ui/boundary';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type Params = Promise<{ slug: string }>;

const productLabel = '<ProductDetails> (Cacheable + Prefetched)';

export default function Page({ params }: { params: Params }) {
  return (
    <Boundary label="page.tsx (App Shell)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <BackLink />
        <Suspense fallback={<ProductDetailsSkeleton label={productLabel} />}>
          <PrefetchedProduct params={params} />
        </Suspense>
        <Suspense fallback={<RecommendationsSkeleton />}>
          <NavigationOnlyRecommendations params={params} />
        </Suspense>
      </div>
    </Boundary>
  );
}

async function PrefetchedProduct({ params }: { params: Params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  return <ProductDetails product={product} label={productLabel} />;
}

async function NavigationOnlyRecommendations({ params }: { params: Params }) {
  const { slug } = await params;
  const products = await getRecommendations(slug);

  return <Recommendations products={products} />;
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
