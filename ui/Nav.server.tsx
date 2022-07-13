import clsx from 'clsx';
import Link from 'next/link';

type Item = {
  name: string;
  href: string;
  items?: {
    name: string;
    href: string;
  }[];
  disabled?: boolean;
};

const NavItem = ({ item }: { item: Item }) => {
  return (
    <>
      <Link
        href={item.href}
        className={clsx(
          'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
          {
            'text-gray-400': item.disabled,
            'text-gray-600 hover:bg-gray-50 hover:text-gray-900':
              !item.disabled,
          },
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

export function Nav({ items }: { items: Item[] }) {
  return (
    <div className="space-y-1">
      <h3
        className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500"
        id="projects-headline"
      >
        Demos
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
