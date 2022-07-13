import Link from 'next/link';

export default function Layout({ children }: { children: any }) {
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center">
          <div className="flex space-x-3">
            <Link
              href="/layouts"
              className="rounded-full bg-white/30 px-3 text-sm font-medium text-white hover:bg-white/60"
            >
              Home
            </Link>
            <Link
              href="/layouts/electronics"
              className="rounded-full bg-white/30 px-3 text-sm font-medium text-white hover:bg-white/60"
            >
              Electronics
            </Link>
            <div className="w-24 rounded-full bg-white/20"></div>
            <div className="w-16 rounded-full bg-white/20"></div>
            <div className="w-20 rounded-full bg-white/20"></div>
          </div>
          <div className="ml-auto">{/* <Counter /> */}</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
