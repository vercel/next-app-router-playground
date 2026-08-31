import {
  ProductDetails,
  ProductDetailsSkeleton,
  getProduct,
} from '#/app/prefetch-stages/_components/product';
import { Boundary } from '#/ui/boundary';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { unstable_prefetch as prefetch } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type Params = Promise<{ slug: string }>;

const productLabel = '<ProductDetails> (Cacheable + Not in App Shell)';

export default function Page({ params }: { params: Params }) {
  return (
    <Boundary label="page.tsx (App Shell)" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <BackLink />
        <Suspense fallback={<ProductDetailsSkeleton label={productLabel} />}>
          <ProductOutsideAppShell params={params} />
        </Suspense>
      </div>
    </Boundary>
  );
}

async function ProductOutsideAppShell({ params }: { params: Params }) {
  await prefetch();

  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  return <ProductDetails product={product} label={productLabel} />;
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
