'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LinkStatus } from '#/ui/link-status';
import { examples } from '../_lib/examples';

function DemoLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="flex items-center gap-3 rounded-lg border border-gray-800 px-3 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white"
    >
      {children}
      <LinkStatus />
    </Link>
  );
}

export function ExampleLinks() {
  const [unlistedId, setUnlistedId] = useState('2');

  return (
    <div className="space-y-6">
      <div className="space-y-3 text-sm text-gray-400">
        <p>
          Start with product 1, then try an unlisted ID. Each uncached product
          query takes 1.5 seconds. Links have prefetching disabled so the first
          click starts the request.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() =>
              setUnlistedId(`2-${crypto.randomUUID().slice(0, 8)}`)
            }
            className="rounded-lg bg-gray-800 px-3 py-2 font-medium text-gray-200 hover:bg-gray-700"
          >
            Use a fresh unlisted ID
          </button>
          <code aria-live="polite">{unlistedId}</code>
        </div>
        <p className="text-gray-500">
          Suffixed IDs load the same product with a fresh route and data-cache
          key. Use a production build to compare first visits with cached
          results.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {examples.map((example) => (
          <section
            key={example.mode}
            className="space-y-3 rounded-xl border border-gray-800 p-4"
          >
            <code className="text-vercel-pink text-sm">{example.mode}</code>
            <h2 className="font-medium text-gray-200">{example.title}</h2>
            <p className="text-sm text-gray-400">{example.description}</p>
            <DemoLink href={`/param-matching/${example.mode}/1`}>
              {example.mode === 'dynamic'
                ? 'Product 1 (request time)'
                : 'Product 1 (listed)'}
            </DemoLink>
            <DemoLink href={`/param-matching/${example.mode}/${unlistedId}`}>
              {example.mode === 'dynamic'
                ? 'Product 2 (request time)'
                : 'Product 2 (unlisted)'}
            </DemoLink>
          </section>
        ))}
      </div>
      <section className="space-y-3 rounded-xl border border-gray-800 p-4">
        <h2 className="font-medium text-gray-200">
          Combine policies across parameters
        </h2>
        <p className="text-sm text-gray-400">
          The layout sets lang to not-found. The page uses
          unstable_generateParamMatching() to set id to fallback. Only en/1 is
          returned by generateStaticParams().
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <DemoLink href="/param-matching/mixed/en/1">
            Listed language and ID
          </DemoLink>
          <DemoLink href={`/param-matching/mixed/en/${unlistedId}`}>
            Listed language, new ID
          </DemoLink>
          <DemoLink href="/param-matching/mixed/fr/1">
            Unlisted language (404)
          </DemoLink>
        </div>
      </section>
    </div>
  );
}
