import { NavLinks } from '#/app/(patterns)/active-links/nav-links';
import { NextLogoDark } from '#/ui/next-logo';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Hardcoded links or fetched from db
  const links = [
    { href: '/active-links', name: 'Home' },
    { href: '/active-links/profile', name: 'Profile' },
    { href: '/active-links/community', name: 'Community' },
    { href: '/active-links/settings', name: 'Settings' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-x-3 py-3">
        <div className="flex gap-x-3">
          <Link href="/active-links" className="h-10 w-10 hover:opacity-70">
            <NextLogoDark />
          </Link>
          <NavLinks links={links} />
        </div>
        <Link href="/active-links/profile">
          <Image
            src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
            className="rounded-full"
            width={40}
            height={40}
            alt="User"
          />
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
}
