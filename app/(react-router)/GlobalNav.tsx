'use client';

import { demos } from '#/lib/demos';
import { demos as reactRouterDemos } from '#/lib/reactRouterDemos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const pathname = useLocation()?.pathname;

  return (
    <div className="space-y-5">
      {demos.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <div>{demo.name}</div>
            </div>

            {demo.items.map((item) => {
              const isActive =
                (!pathname && item.slug === selectedLayoutSegments) || // Next.js segment compare
                pathname?.endsWith(item.slug); // React-router pathname compare

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                      title="Coming Soon"
                    >
                      {item.name}
                    </div>
                  ) : (
                    <a
                      href={`/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-gray-100',
                        { 'text-gray-400': !isActive, 'text-white': isActive },
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
      {reactRouterDemos.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <div>{demo.name}</div>
            </div>

            {demo.items.map((item) => {
              const isActive =
                (!pathname && item.slug === selectedLayoutSegments) || // Next.js segment compare
                pathname?.endsWith(item.slug); // React-router pathname compare

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                      title="Coming Soon"
                    >
                      {item.name}
                    </div>
                  ) : (
                    <ReactRouterLink
                      to={`/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-gray-100',
                        { 'text-gray-400': !isActive, 'text-white': isActive },
                      )}
                    >
                      {item.name}
                    </ReactRouterLink>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
