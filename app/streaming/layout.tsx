import React, { Suspense } from 'react';
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import logo from '../../public/nextjs-icon-light-background.png';
import { delay } from './delay';

async function ShoppingCartCount() {
  // Normally you would fetch data here
  await delay(1500);

  return (
    <div className="absolute flex items-center justify-center w-4 h-4 text-sm font-bold text-white rounded-full -top-1 -right-1 bg-vercel-pink">
      <span>3</span>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between px-5 py-4 rounded-lg bg-zinc-800">
        <div className="flex space-x-4">
          <div className="w-10 h-10">
            <Image
              src={logo}
              className="rounded-full"
              alt="Next.js"
              placeholder="blur"
            />
          </div>

          <div className="relative w-56">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-zinc-300" />
            </div>
            <input
              aria-label="Search"
              type="search"
              name="search"
              id="search"
              className="block w-full pl-10 font-medium border-none rounded-full bg-zinc-600 text-zinc-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="relative flex items-center justify-center w-10 h-10 text-white rounded-full bg-zinc-600">
            <ShoppingCartIcon className="w-6 text-white" />
            <Suspense>
              {/* @ts-ignore */}
              <ShoppingCartCount />
            </Suspense>
          </div>

          <Image
            src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
            className="rounded-full"
            width={40}
            height={40}
            alt="User"
          />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
