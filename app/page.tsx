import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import { ThemeToggle } from '#/ui/theme-toggle';
import Link from 'next/link';

export default function Page() {
  const demos = db.demo.findMany();
  return (
    <Boundary
      label="Examples"
      animateRerendering={false}
      kind="solid"
      className="flex flex-col gap-9"
    >
      {/* Container to align the theme toggle button neatly at the top right */}
      <div className="flex justify-end px-2">
        <ThemeToggle />
      </div>

      {demos.map((section) => {
        return (
          <div key={section.name} className="flex flex-col gap-3">
            <div className="font-mono text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
              {section.name}
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => {
                return (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className="group flex flex-col gap-1 rounded-lg bg-gray-100 dark:bg-gray-900 px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 border border-border transition-colors"
                  >
                    <div className="flex items-center justify-between font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.name} <LinkStatus />
                    </div>

                    {item.description ? (
                      <div className="line-clamp-3 text-[13px] text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </Boundary>
  );
}
