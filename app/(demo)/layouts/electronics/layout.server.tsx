import { Boundary } from '@/ui/Boundary.server';
import { Counter } from '@/ui/Counter.client';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import Link from 'next/link';

export default function Layout(props: any) {
  return (
    <Boundary>
      <div className="space-y-9">
        <div>
          <div className="flex space-x-4">
            <Link
              href="/layouts/electronics"
              className="rounded-full bg-white/30 px-3 text-sm font-medium text-white hover:bg-white/60"
            >
              All
            </Link>

            <Link
              href="/layouts/electronics/phones"
              className="rounded-full bg-white/30 px-3 text-sm font-medium text-white hover:bg-white/60"
            >
              Phones
            </Link>

            <Link
              href="/layouts/electronics/headphones"
              className="rounded-full bg-white/30 px-3 text-sm font-medium text-white hover:bg-white/60"
            >
              Headphones
            </Link>

            <Link
              href="/layouts/electronics/laptops"
              className="rounded-full bg-white/30 px-3 text-sm font-medium text-white hover:bg-white/60"
            >
              Laptops
            </Link>
          </div>
          {/* <div className="mt-auto">
        <Counter />
      </div> */}
        </div>

        <div>{props.children}</div>
      </div>
    </Boundary>
  );
}
