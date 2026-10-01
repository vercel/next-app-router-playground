import type { ParamMatching } from 'next';
import { Suspense } from 'react';
import { Product, ProductSkeleton } from '../../../_components/product';

export async function unstable_generateParamMatching() {
  return { id: 'fallback' } satisfies ParamMatching<'id'>;
}

export function generateStaticParams() {
  return [{ lang: 'en', id: '1' }];
}

export default function Page({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-200">
        Listed language, flexible product IDs
      </h1>
      <p className="text-sm text-gray-400">
        The parent layout requires a listed language. Product IDs can show a
        fallback while their result is generated.
      </p>
      <Suspense fallback={<ProductSkeleton />}>
        {params.then(({ lang, id }) => (
          <div className="space-y-4">
            <p className="text-sm text-gray-400">Language: {lang}</p>
            <Product id={id} example={`mixed-${lang}`} />
          </div>
        ))}
      </Suspense>
    </div>
  );
}
