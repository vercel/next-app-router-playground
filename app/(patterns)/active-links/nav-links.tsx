'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function NavLinks({
  links,
}: {
  links: { href: string; name: string }[];
}) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx('rounded-md px-3 py-2 hover:bg-gray-900', {
            'bg-gray-900': pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
