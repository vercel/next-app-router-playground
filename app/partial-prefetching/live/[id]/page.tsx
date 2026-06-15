import { Boundary } from '#/ui/boundary';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { findProduct, getLiveStock } from '../../_components/data';

// Bare <Link> from the hub. Only the App Shell is prefetched. Everything
// that depends on `id` is uncached and streams in after the click.
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Boundary label="page.tsx (live)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <Link
          href="/partial-prefetching"
          className="flex items-center gap-2 self-start text-sm font-medium text-gray-300 hover:text-white"
        >
          <ChevronLeftIcon className="size-5 text-gray-600" />
          Back
        </Link>

        <Suspense fallback={<LiveCardSkeleton />}>
          <LiveCard params={params} />
        </Suspense>
      </div>
    </Boundary>
  );
}

async function LiveCard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();
  const stock = await getLiveStock(id);

  return (
    <Boundary
      label="<LiveCard> (uncached · connection())"
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
          <div className="flex items-baseline gap-3 text-sm">
            <span className="font-mono text-gray-200">
              {stock.stock} in stock
            </span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{stock.viewers} viewing now</span>
          </div>
        </div>
      </div>
    </Boundary>
  );
}

function LiveCardSkeleton() {
  return (
    <Boundary
      label="<LiveCard> (uncached · connection())"
      size="small"
      color="blue"
      animateRerendering={false}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-md bg-gray-900/50" />
        <div className="flex flex-col gap-3">
          <div className="h-6 w-2/5 animate-pulse rounded-full bg-gray-800" />
          <div className="h-5 w-1/4 animate-pulse rounded-full bg-gray-800" />
          <div className="h-4 w-3/5 animate-pulse rounded-full bg-gray-800" />
        </div>
      </div>
    </Boundary>
  );
}
