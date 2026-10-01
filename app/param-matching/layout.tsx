import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import Link from 'next/link';
import readme from './readme.mdx';

export function generateMetadata() {
  const demo = db.demo.find({ where: { slug: 'param-matching' } });
  return {
    title: demo.name,
    openGraph: { title: demo.name, images: [`/api/og?title=${demo.name}`] },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Boundary label="Demo" kind="solid" animateRerendering={false}>
        <Mdx source={readme} collapsed={true} />
      </Boundary>
      <Boundary label="layout.tsx" kind="solid" animateRerendering={false}>
        <div className="space-y-6">
          <Link
            href="/param-matching"
            className="text-sm text-gray-400 hover:text-white"
          >
            ← All parameter-matching examples
          </Link>
          {children}
        </div>
      </Boundary>
    </>
  );
}
