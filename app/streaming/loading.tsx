import { ShoppingCartIcon, SearchIcon } from '@heroicons/react/solid';
import { RecommendedProductsSkeleton } from './(shop)/RecommendedProducts';
import Image from 'next/image';
import logo from '../../public/nextjs-icon-light-background.png';

const shimmer = `relative overflow-hidden rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export default function Loading() {
  return (
    <div className="min-h-screen space-y-16">
      <div className="flex items-center justify-between rounded-lg bg-zinc-800 px-5 py-4">
        <div className="flex space-x-4">
          <div className="h-10 w-10">
            <Image src={logo} alt="Next.js" />
          </div>

          <div className="relative w-56">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-zinc-300" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full rounded-full border-none bg-zinc-600 pl-10 font-medium text-zinc-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 text-white">
            <ShoppingCartIcon className="w-6 text-white" />
          </div>

          <div className="h-10 w-10 rounded-full bg-zinc-600"></div>
        </div>
      </div>

      <div className="space-y-16">
        <div className="grid grid-cols-8 gap-6 pb-1">
          <div className="col-span-2">
            <div className={`space-y-2 ${shimmer}`}>
              <div className="h-[166px] w-full rounded-lg bg-zinc-800"></div>

              <div className="flex space-x-2">
                <div className="w-1/3">
                  <div className="h-[50px] w-full rounded-lg bg-zinc-800" />
                </div>
                <div className="w-1/3">
                  <div className="h-[50px] w-full rounded-lg bg-zinc-800" />
                </div>
                <div className="w-1/3">
                  <div className="h-[50px] w-full rounded-lg bg-zinc-800" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-6">
            <div
              className={`h-[500px] animate-pulse rounded-lg bg-zinc-800 ${shimmer}`}
            />
          </div>

          <div className="col-span-2">
            <div
              className={`h-[224px] animate-pulse space-y-4 rounded-lg bg-zinc-800 ${shimmer}`}
            ></div>
          </div>
        </div>

        <RecommendedProductsSkeleton />
      </div>
    </div>
  );
}
