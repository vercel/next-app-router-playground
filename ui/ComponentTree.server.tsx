import { Boundary } from '@/ui/Boundary.server';
import clsx from 'clsx';
import React from 'react';

type Item = {
  name: string;
  type: 'server' | 'client';
  duplicates?: number;
  size: number;
  children?: Item[];
};

const List = ({ items, depth }: { items: Item[]; depth: number }) => {
  return (
    <div>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <div
            key={item.name}
            className={clsx(
              'relative before:absolute',
              // Visualize tree hierarchy
              // vertical line
              'before:-left-3 before:top-0 before:border-zinc-800',
              // horizontal line
              'after:top-6 after:-left-3 after:h-3 after:w-3 after:border-zinc-800',
              {
                'ml-6 pt-3 before:border-l-2 after:absolute after:border-t-2':
                  // Don't add ui for the first level
                  depth !== 0,
                'before:h-full': !isLast,
                // Last item should end earlier
                'before:h-6': isLast,
              },
            )}
          >
            <div className="flex space-x-1">
              <div
                className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                  'bg-vercel-blue text-white': item.type === 'client',
                  'bg-zinc-700 text-zinc-100': item.type === 'server',
                })}
              >
                {item.name}
              </div>

              {item.duplicates ? (
                <div
                  className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                    'bg-vercel-blue text-white': item.type === 'client',
                    'bg-zinc-700 text-zinc-100': item.type === 'server',
                  })}
                >
                  ×{item.duplicates}
                </div>
              ) : null}

              <div className="rounded-lg bg-zinc-800 px-3 py-1 text-sm font-medium text-white/50">
                {item.size / 1000} KB
              </div>
            </div>

            {item.children ? (
              <List items={item.children} depth={depth + 1} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

// Calculate the total bundle size of a specific component type (client or
// server) in a tree
// TODO: Decide if to multiply the size by the number of duplicates
const sum = (items: Item[], filterType: Item['type']): number =>
  items.reduce(
    (total, item) =>
      // running total
      total +
      // add the current component size if it's type is filterType
      ((item.type === filterType ? item.size : 0) || 0) +
      // add the total size of children components
      (item?.children ? sum(item.children, filterType) : 0),
    0,
  );

export const ComponentTree = ({ items }: { items: Item[] }) => {
  const clientTotal = sum(items, 'client');
  const serverTotal = sum(items, 'server');
  const fill = Math.round((clientTotal / (clientTotal + serverTotal)) * 100);

  return (
    <div className="space-y-6">
      <Boundary animateRerendering={false} labels={['Bundle Size']}>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <div className="rounded-full bg-vercel-blue px-1.5 text-[9px] uppercase leading-4 tracking-widest text-blue-100">
              Client Components
            </div>
            <div className="rounded-full bg-vercel-blue px-1.5 text-[9px] uppercase leading-4 tracking-widest text-blue-100">
              {clientTotal / 1000} KB
            </div>
          </div>
          <div className="rounded-full bg-zinc-800">
            <div
              className={clsx('h-2 bg-vercel-blue odd:rounded-full')}
              style={{ width: `${fill}%` }}
            />
          </div>
        </div>
      </Boundary>

      <Boundary animateRerendering={false} labels={['Component Tree']}>
        <List items={items} depth={0} />
      </Boundary>
    </div>
  );
};
