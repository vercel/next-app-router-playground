import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import Link from 'next/link';

const variants = [
  {
    href: '/partial-prefetching/cached',
    prefetch: undefined,
    name: 'A. /cached (default)',
    description:
      'Default <Link> to a fully cached destination. Prefetches the App Shell only.',
  },
  {
    href: '/partial-prefetching/cached',
    prefetch: true as const,
    name: 'B. /cached (prefetch={true})',
    description:
      'Opt this specific link into prefetching the cached page content alongside the shell.',
  },
  {
    href: '/partial-prefetching/streaming',
    prefetch: undefined,
    name: 'C. /streaming (default)',
    description:
      'Destination streams uncached data behind <Suspense>. Shell only; the fallback shows on click.',
  },
  {
    href: '/partial-prefetching/runtime',
    prefetch: undefined,
    name: 'D. /runtime (force-runtime segment)',
    description:
      "Destination exports unstable_prefetch = 'force-runtime'. Prefetches a runtime prerender that includes cookies, headers, and search params.",
  },
];

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {variants.map((variant) => (
          <Link
            key={variant.name}
            href={variant.href}
            prefetch={variant.prefetch}
            className="group flex flex-col gap-1 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
          >
            <div className="flex items-center justify-between font-medium text-gray-200 group-hover:text-gray-50">
              {variant.name} <LinkStatus />
            </div>
            <div className="line-clamp-3 text-[13px] text-gray-500 group-hover:text-gray-300">
              {variant.description}
            </div>
          </Link>
        ))}
      </div>
    </Boundary>
  );
}
