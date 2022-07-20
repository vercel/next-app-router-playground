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
  const lastCategory = categories[categories.length - 1];
  return (
    <div className="space-y-9">
      <Boundary>
        <div className="space-y-4">
          <div className="text-xl font-medium text-zinc-500">Home</div>
          <div className="grid grid-cols-3 gap-6">
            {/* Demo soft push */}
            {categories.slice(0, -1).map((category) => {
              return (
                <SectionLink
                  key={category.slug}
                  href={`/soft-push/${category.slug}`}
                  text={category.name}
                  useSoftPush={true}
                >
                  <SkeletonCard />
                </SectionLink>
              );
            })}

            {/* Demo hard push */}
            <SectionLink
              key={lastCategory.slug}
              href={`/soft-push/${lastCategory.slug}`}
              text={`${lastCategory.name} (Hard push)`}
            >
              <SkeletonCard />
            </SectionLink>
          </div>
        </div>
      </Boundary>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>This example temporarily requires a production build.</li>
          <li>
            As you navigate around the app, the router stores the result of the
            React Server Component payload in an in-memory client-side cache.
          </li>
          <li>
            The navigation items in this example use{' '}
            <span className="font-medium text-white">{`<Link soft>`}</span>. On
            soft navigation, segments that change use the cache (if it exists),
            and no requests to the server are made. Unchanged segments are
            preserved because they do not re-render.
          </li>
          <li>
            Try navigating to a category to add it to the cache. Notice it takes
            time to load. Then navigate away and back again. Notice this time
            navigation is instant because it uses the cache.
          </li>
          <li>
            Back/Forward navigation uses soft navigation by default. Try
            navigating backwards or forwards after visiting all categories for
            instant navigation.
          </li>
          <li>
            Links to the last category uses a hard push which is the default for{' '}
            <span className="font-medium text-white">{`<Link>`}</span>.
            Navigating to this item will always invalidate the cache and refetch
            from the server.
          </li>
        </ul>
      </div>
    </div>
  );
}
