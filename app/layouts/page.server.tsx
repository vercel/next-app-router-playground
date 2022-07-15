import { type Category, getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import Counter from '@/ui/Counter.client';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import { TabNavItem } from '@/ui/TabNavItem';
import Link from 'next/link';

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
          <div className="text-xl font-medium text-white">Layouts</div>
        </div>

        <div className="">
          <div className="grid grid-cols-[124px,1fr] gap-x-6 gap-y-8">
            <div>
              <Boundary>{''}</Boundary>
            </div>

            <div>
              The{' '}
              <span className="font-mono font-medium text-white">{`{children}`}</span>{' '}
              boundary between a parent layout and a nested layout or page.
            </div>

            <div>
              <Boundary isHighlighted={true}>{''}</Boundary>
            </div>
            <div>
              A pink border indicates{' '}
              <span className="font-mono font-medium text-white">{`{children}`}</span>{' '}
              have recently re-rendered.
            </div>

            <div>
              <Counter />
            </div>

            <div>
              A client-side component with state. Use it to highlight that state
              is preserved in a parent layout when{' '}
              <span className="font-mono font-medium text-white">{`{children}`}</span>{' '}
              change.
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>Navigate to a category to get started:</div>

          <div className="flex space-x-3">
            {categories.map((category) => (
              <TabNavItem
                key={category.slug}
                href={`/layouts/${category.slug}`}
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
