import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  findProduct,
  getRecommendationsForViewer,
} from '../../_components/data';

// <Link prefetch={true}> from the hub + `prefetch = 'allow-runtime'`
// here. The page body uses 'use cache: private' (reads the session
// cookie). Because the route opts into runtime prefetching, the
// personalised content is included in the prefetch payload.
export const prefetch = 'allow-runtime';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Boundary label="page.tsx (for-you)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <Link
          href="/partial-prefetching"
          className="flex items-center gap-2 self-start text-sm font-medium text-gray-300 hover:text-white"
        >
          <ChevronLeftIcon className="size-5 text-gray-600" />
          Back
        </Link>

        <Suspense fallback={<ForYouCardSkeleton />}>
          <ForYouCard params={params} />
        </Suspense>
      </div>
    </Boundary>
  );
}

async function ForYouCard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();
  const recs = await getRecommendationsForViewer(id);

  return (
    <Boundary
      label="<ForYouCard> ('use cache: private')"
      size="small"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-md bg-gray-900/50 p-12">
            <Image
              className="brightness-150"
              src={`/shop/${product.image}`}
              alt={product.name}
              quality={90}
              width={400}
              height={400}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-gray-200">
              {product.name}
            </h1>
            <span className="font-mono text-xl text-gray-300">
              ${product.price.toFixed(2)}
            </span>
            <p className="font-mono text-[11px] text-gray-600">
              built at {recs.builtAt} · session{' '}
              <span className="text-pink-300">{recs.sessionId}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-base font-medium text-gray-300">For you</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {recs.items.map((p) => (
              <ProductCard key={p.id} product={p} animateEnter={true} />
            ))}
          </div>
        </div>
      </div>
    </Boundary>
  );
}

function ForYouCardSkeleton() {
  return (
    <Boundary
      label="<ForYouCard> ('use cache: private')"
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-md bg-gray-900/50" />
          <div className="flex flex-col gap-3">
            <div className="h-6 w-2/5 animate-pulse rounded-full bg-gray-800" />
            <div className="h-5 w-1/4 animate-pulse rounded-full bg-gray-800" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-medium text-gray-300">For you</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-lg bg-gray-800"
              />
            ))}
          </div>
        </div>
      </div>
    </Boundary>
  );
}
