import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { TabNavItem } from '@/ui/TabNavItem';

export const getServerSideProps = () => {
  return {
    props: { categories: getCategories() },
  };
};

export default function Page({ categories }: { categories: Category[] }) {
  return (
    <Boundary>
      <div className="space-y-10 text-sm text-zinc-400">
        <div>
          <div className="text-2xl font-medium text-white">Loading UI</div>
          <div className="mt-3">
            This example has an artificial delay in the{' '}
            <span className="font-mono font-medium text-white">
              `getServerSideProps()`
            </span>{' '}
            of each categories page.{' '}
            <span className="font-mono font-medium text-white">
              `loading.js`
            </span>{' '}
            is used to show a loading skeleton immediately while the category
            page loads.{' '}
            <a
              className="text-zinc-200 hover:text-white"
              href="https://www.notion.so/vercel/Loading-UI-42db3794dfd142e3b7537796d5eb4685"
            >
              Learn more
            </a>
            .
          </div>
        </div>

        <div>
          <div className="font-medium text-white">Things to note</div>
          <ul className="mt-3 list-disc space-y-2 pl-4">
            <li>
              Shared layouts are still interactive while nested layouts or pages
              load. Try clicking the counter while{' '}
              <span className="font-mono font-medium text-white">{`{children}`}</span>{' '}
              load.
            </li>
            <li>
              Navigation is interruptible. Try navigating to one category, then
              clicking a second category before the first one has loaded.
            </li>
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-[200px,1fr] gap-x-6 gap-y-8">
            <div>
              <Boundary isHighlighted={true} isRendering={true}>
                <SkeletonCard />
              </Boundary>
            </div>

            <div>
              A boundary with pulsing skeletons indicates{' '}
              <span className="font-mono font-medium text-white">{`{children}`}</span>{' '}
              are being loaded.
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>Navigate to a category to get started:</div>

          <div className="flex space-x-3">
            {categories.map((category) => (
              <TabNavItem
                key={category.slug}
                href={`/loading/${category.slug}`}
              >
                {category.name}
              </TabNavItem>
            ))}
          </div>
        </div>
      </div>
    </Boundary>
  );
}
