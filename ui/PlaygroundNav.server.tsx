import clsx from 'clsx';
import Link from 'next/link';

type Item = {
  name: string;
  href: string;
  items?: {
    name: string;
    href: string;
  }[];
};

export const playgrounds: Item[] = [
  {
    name: 'Layouts',
    href: '/layouts',
  },
  {
    name: 'Loading UI',
    href: '/loading',
  },
  {
    name: 'Client/Server Components (WIP)',
    href: '/component-types/server',
  },
  //
  // { name: 'Parallel routes', href: '#', disabled: true },
  // { name: 'Intercepting routes', href: '#', disabled: true },
];

const NavItem = ({ item }: { item: Item }) => {
  return (
    <>
      <Link
        href={item.href}
        className={clsx(
          'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-zinc-100',
        )}
      >
        <span className="truncate">{item.name}</span>
      </Link>
      {item.items && item.items.length > 0 ? (
        <div className="pl-3">
          {item.items.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export function PlaygroundNav() {
  return (
    <div className="space-y-1">
      <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Demos
      </h3>
      <div className="space-y-1">
        {playgrounds.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
