import { getCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params!;

  return {
    props: {
      category: getCategories().find((x) => x.slug === category),
    },
  };
};

export default function Layout({
  children,
  category,
}: {
  children: React.ReactNode;
  category: ReturnType<typeof getCategories>[0];
}) {
  return (
    <Boundary>
      <div className="space-y-9">
        <div>
          <div className="flex space-x-4">
            <Link
              href="/layouts/electronics"
              className="rounded-full bg-zinc-700 px-3 text-sm font-medium text-zinc-100 hover:bg-pink-600 hover:text-white"
            >
              All
            </Link>

            {category.items.map((item) => (
              <Link
                key={item.slug}
                href={`/layouts/${category.slug}/${item.slug}`}
                className="rounded-full bg-zinc-700 px-3 text-sm font-medium text-zinc-100 hover:bg-pink-600 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* <div className="mt-auto">
        <Counter />
      </div> */}
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
