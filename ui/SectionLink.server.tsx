import Link from 'next/link';

export const SectionLink = ({
  children,
  href,
  text,
  useSoftPush,
}: {
  children: React.ReactNode;
  href: string;
  text: string;
  useSoftPush?: boolean;
}) => (
  <Link href={href} soft={useSoftPush} className="group block space-y-2">
    <div className="rounded-[20px] border border-zinc-900 p-1 group-hover:border-blue-600">
      {children}
    </div>
    <div className="font-medium text-white group-hover:text-zinc-400">
      {text}
    </div>
  </Link>
);
