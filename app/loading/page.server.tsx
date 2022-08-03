import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SectionLink } from '@/ui/SectionLink.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

export const getServerSideProps = () => {
  return {
    props: { categories: getCategories() },
  };
};

export default function Page({ categories }: { categories: Category[] }) {
  return (
    <div className="space-y-9">
      <Boundary>
        <div className="space-y-4">
          <div className="text-xl font-medium text-zinc-500">Home</div>
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category) => {
              return (
                <SectionLink
                  key={category.slug}
                  href={`/loading/${category.slug}`}
                  text={category.name}
                >
                  <SkeletonCard />
                </SectionLink>
              );
            })}

            <SectionLink href="/loading/no-loading" text="No Loading UI">
              <SkeletonCard />
            </SectionLink>
          </div>
        </div>
      </Boundary>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            This example has an artificial delay in the{' '}
            <span className="font-medium text-white">
              `getServerSideProps()`
            </span>{' '}
            of each categories page.{' '}
            <span className="font-medium text-white">`loading.js`</span> is used
            to show a loading skeleton immediately while the category page
            loads.
          </li>
          <li>
            Shared layouts remain interactive while nested layouts or pages
            load. Try clicking the counter while{' '}
            <span className="font-medium text-white">children</span> load.
          </li>
          <li>
            Navigation is interruptible. Try navigating to one category, then
            clicking a second category before the first one has loaded.
          </li>
        </ul>
      </div>
    </div>
  );
}
