'use client';

import { Demo, navigation } from '#/app/_internal/demos';
import { LinkStatus } from '#/ui/link-status';
import { NextLogoDark } from '#/ui/next-logo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="size-9 rounded-full border-2 border-gray-800 group-hover:border-gray-700">
            <NextLogoDark />
          </div>

          <h3 className="text-lg font-medium text-gray-200 group-hover:text-white">
            Playground
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute top-0 right-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 top-14 bottom-0 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pt-5 pb-24">
          {navigation.map((category) => {
            return (
              <div key={category.name}>
                <div className="mb-2 px-3 font-mono text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  <div>{category.name}</div>
                </div>

                <div className="flex flex-col gap-1">
                  {category.items.map((item) => (
                    <NavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}

function NavItem({ item, close }: { item: Demo; close: () => false | void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'flex justify-between rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.nav_title || item.name}
      <LinkStatus />
    </Link>
  );
}
