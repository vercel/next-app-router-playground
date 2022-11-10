'use client';

import { demos } from '#/lib/demos';
import { demos as reactRouterDemos } from '#/lib/reactRouterDemos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import NextLink from 'next/link';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="space-y-5">
      {demos.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <div>{demo.name}</div>
            </div>

            {demo.items.map((item) => {
              const isActive = item.slug === selectedLayoutSegments;

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
                    <NextLink
                      href={`/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-gray-100',
                        { 'text-gray-400': !isActive, 'text-white': isActive },
                      )}
                    >
                      {item.name}
                    </NextLink>
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
              const isActive = item.slug === selectedLayoutSegments;

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
    </div>
  );
}
