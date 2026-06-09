import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import Link from 'next/link';

const variants = [
  {
    href: '/partial-prefetching/streaming',
    prefetch: undefined,
    name: '/streaming',
    description: 'Default <Link>. Prefetch covers only the App Shell.',
  },
  {
    href: '/partial-prefetching/cached',
    prefetch: true as const,
    name: '/cached',
    description:
      '<Link prefetch={true}>. Prefetch covers the App Shell plus the cached page content.',
  },
  {
    href: '/partial-prefetching/allow-runtime',
    prefetch: undefined,
    name: '/allow-runtime',
    description:
      "Page exports prefetch = 'allowRuntime'. Prefetch is a runtime prerender that resolves cookies, headers, and search params.",
  },
];

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Three routes with the same four sections (static, cached, private
          cache, uncached). The link to each route uses a different
          configuration so you can compare what arrives in the prefetch.
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
      </div>
    </Boundary>
  );
}
