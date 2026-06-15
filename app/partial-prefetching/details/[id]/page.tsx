import { Boundary } from '#/ui/boundary';
import { StarIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { findProduct, getProductCopy } from '../../_components/data';

// <Link prefetch={true}> from the hub. The page body lives behind a
// 'use cache' boundary keyed by the product id (which is in the URL),
// so the rendered content is included in the prefetch payload.
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Boundary label="page.tsx (details)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <Link
          href="/partial-prefetching"
          className="flex items-center gap-2 self-start text-sm font-medium text-gray-300 hover:text-white"
        >
          <ChevronLeftIcon className="size-5 text-gray-600" />
          Back
        </Link>

        <Suspense fallback={<DetailsCardSkeleton />}>
          <DetailsCard params={params} />
        </Suspense>
      </div>
    </Boundary>
  );
}

async function DetailsCard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();
  const copy = await getProductCopy(id);

  return (
    <Boundary
      label="<DetailsCard> ('use cache')"
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

function DetailsCardSkeleton() {
  return (
    <Boundary
      label="<DetailsCard> ('use cache')"
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
