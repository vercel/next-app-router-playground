import { Boundary } from '#/ui/boundary';
import Link from 'next/link';

const variants = [
  {
    href: '/partial-prefetching/streaming',
    prefetch: undefined,
    name: '<Link>',
    description: 'Default prefetch. App Shell only.',
  },
  {
    href: '/partial-prefetching/cached',
    prefetch: true as const,
    name: '<Link prefetch={true}>',
    description: 'App Shell plus the cached page content.',
  },
  {
    href: '/partial-prefetching/allow-runtime',
    prefetch: true as const,
    name: "<Link prefetch={true}> + prefetch = 'allow-runtime'",
    description:
      "App Shell plus a runtime prerender. Destination exports prefetch = 'allow-runtime' so the prefetch resolves cookies, headers, and search params on the server.",
  },
];

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          The same four sections loaded three different ways. The link config
          decides what arrives in the prefetch.
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {variants.map((variant) => (
            <Link
              key={variant.name}
              href={variant.href}
              prefetch={variant.prefetch}
              className="group flex flex-col gap-1 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
            >
              <div className="font-mono text-[13px] font-medium text-gray-200 group-hover:text-gray-50">
                {variant.name}
              </div>
              <div className="text-[13px] text-gray-500 group-hover:text-gray-300">
                {variant.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Boundary>
  );
}
