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
          <li>To do</li>
        </ul>
      </div>
    </div>
  );
}
