import Link from 'next/link';
import { Suspense } from 'react';
import { examples, type MatchingMode } from '../_lib/examples';
import { ProductSkeleton } from './product';

export function Example({
  mode,
  children,
}: {
  mode: MatchingMode;
  children: React.ReactNode;
}) {
  const example = examples.find((item) => item.mode === mode)!;

  return (
    <div className="space-y-6">
      <BackLink />
      <div className="space-y-2">
        <h1 className="text-xl font-medium text-gray-200">{example.title}</h1>
        <code className="text-vercel-pink text-sm">{`id: '${mode}'`}</code>
        <p className="text-sm text-gray-400">{example.description}</p>
      </div>
      <Suspense fallback={<ProductSkeleton />}>{children}</Suspense>
    </div>
  );
}

export function BackLink() {
  return (
    <Link
      href="/param-matching"
      className="text-sm text-gray-400 hover:text-white"
    >
      ← All policies
    </Link>
  );
}
