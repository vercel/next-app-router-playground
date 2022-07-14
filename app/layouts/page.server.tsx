import { type Category, getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';
import Link from 'next/link';

export const getServerSideProps = () => {
  return {
    props: { categories: getCategories() },
  };
};

export default function Page({ categories }: { categories: Category[] }) {
  return (
    <Boundary>
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/layouts/${category.slug}`}
            className="group relative block space-y-3"
          >
            <SkeletonCard />
            <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-50">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </Boundary>
  );
}
