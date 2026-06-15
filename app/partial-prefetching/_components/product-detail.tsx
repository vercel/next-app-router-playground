import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import { StarIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  findProduct,
  getLiveStock,
  getProductCopy,
  getRecommendationsForViewer,
} from './data';

// Shared destination for all three tiles. Three Suspense boundaries:
// - <Stock>           uncached: always streams.
// - <Details>         'use cache' keyed by id: in the prefetch when the
//                     link uses prefetch={true}.
// - <Recommendations> 'use cache: private' (reads cookies): in the
//                     prefetch only when the route also exports
//                     prefetch = 'allow-runtime'.
export function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/partial-prefetching"
        className="flex items-center gap-2 self-start text-sm font-medium text-gray-300 hover:text-white"
      >
        <ChevronLeftIcon className="size-5 text-gray-600" />
        Back
      </Link>

      <Suspense fallback={<HeroSkeleton />}>
        <Hero params={params} />
      </Suspense>

      <Suspense fallback={<StockSkeleton />}>
        <Stock params={params} />
      </Suspense>

      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations params={params} />
      </Suspense>
    </div>
  );
}

// 'use cache' boundary, keyed by id

async function Hero({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();
  const copy = await getProductCopy(id);

  return (
    <Boundary
      label="<Hero> ('use cache')"
      size="small"
      animateRerendering={false}
    >
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

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-gray-200">
            {product.name}
          </h1>
          <span className="font-mono text-xl text-gray-300">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-3">
            <StarIcon className="size-5 text-yellow-400" />
            <span className="font-mono text-lg text-gray-200">
              {copy.avgRating}
            </span>
            <span className="text-sm text-gray-500">
              from {copy.reviewCount} reviews
            </span>
          </div>
          <p className="text-sm text-gray-400">{copy.body}</p>
        </div>
      </div>
    </Boundary>
  );
}

function HeroSkeleton() {
  return (
    <Boundary
      label="<Hero> ('use cache')"
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-md bg-gray-900/50" />
        <div className="flex flex-col gap-3">
          <div className="h-6 w-2/5 animate-pulse rounded-full bg-gray-800" />
          <div className="h-5 w-1/4 animate-pulse rounded-full bg-gray-800" />
          <div className="h-4 w-2/5 animate-pulse rounded-full bg-gray-800" />
          <div className="h-3 w-full animate-pulse rounded-full bg-gray-800" />
          <div className="h-3 w-4/5 animate-pulse rounded-full bg-gray-800" />
        </div>
      </div>
    </Boundary>
  );
}

// Uncached boundary

async function Stock({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const stock = await getLiveStock(id);
  return (
    <Boundary
      label="<Stock> (uncached)"
      size="small"
      animateRerendering={false}
    >
      <div className="flex items-baseline gap-3 text-sm">
        <span className="font-mono text-gray-200">{stock.stock} in stock</span>
        <span className="text-gray-500">·</span>
        <span className="text-gray-500">{stock.viewers} viewing now</span>
      </div>
    </Boundary>
  );
}

function StockSkeleton() {
  return (
    <Boundary
      label="<Stock> (uncached)"
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="h-4 w-56 animate-pulse rounded-full bg-gray-800" />
    </Boundary>
  );
}

// 'use cache: private' boundary, reads the session cookie

async function Recommendations({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recs = await getRecommendationsForViewer(id);
  return (
    <Boundary
      label="<Recommendations> ('use cache: private')"
      size="small"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-base font-medium text-gray-300">For you</h2>
          <span className="font-mono text-[11px] text-gray-600">
            built at {recs.builtAt} · session{' '}
            <span className="text-pink-300">{recs.sessionId}</span>
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {recs.items.map((p) => (
            <ProductCard key={p.id} product={p} animateEnter={true} />
          ))}
        </div>
      </div>
    </Boundary>
  );
}

function RecommendationsSkeleton() {
  return (
    <Boundary
      label="<Recommendations> ('use cache: private')"
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="flex flex-col gap-4">
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
    </Boundary>
  );
}
