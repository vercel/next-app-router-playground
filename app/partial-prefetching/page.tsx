import { Boundary } from '#/ui/boundary';
import Link from 'next/link';

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-300">
            Link variants
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Open DevTools &rarr; Network and watch the prefetches as each link
            enters the viewport. The four links below point at three different
            destination routes with different caching characteristics.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="/partial-prefetching/cached"
              className="font-medium text-vercel-cyan hover:underline"
            >
              A. /cached (default)
            </Link>
            <p className="mt-1 text-sm text-gray-500">
              Default <code>{'<Link>'}</code> to a fully cached destination.
              Prefetches the App Shell only.
            </p>
          </li>

          <li>
            <Link
              href="/partial-prefetching/cached"
              prefetch={true}
              className="font-medium text-vercel-cyan hover:underline"
            >
              B. /cached (prefetch=true)
            </Link>
            <p className="mt-1 text-sm text-gray-500">
              Opt this specific link into prefetching the cached page content
              alongside the shell.
            </p>
          </li>

          <li>
            <Link
              href="/partial-prefetching/streaming"
              className="font-medium text-vercel-cyan hover:underline"
            >
              C. /streaming (default)
            </Link>
            <p className="mt-1 text-sm text-gray-500">
              Default <code>{'<Link>'}</code> to a destination whose body
              streams uncached data behind <code>{'<Suspense>'}</code>. Shell
              only; the fallback shows on click.
            </p>
          </li>

          <li>
            <Link
              href="/partial-prefetching/runtime"
              className="font-medium text-vercel-cyan hover:underline"
            >
              D. /runtime (segment opts into runtime prefetching)
            </Link>
            <p className="mt-1 text-sm text-gray-500">
              Default <code>{'<Link>'}</code> to a destination that exports{' '}
              <code>unstable_prefetch = &apos;force-runtime&apos;</code>. The
              prefetch is a runtime prerender that includes cookies, headers,
              and search params.
            </p>
          </li>
        </ul>
      </div>
    </Boundary>
  );
}
