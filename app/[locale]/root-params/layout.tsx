import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { Mdx } from '#/ui/codehike';
import { type Metadata } from 'next';
import readme from './readme.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const demo = db.demo.find({ where: { slug: 'en/root-params' } });

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
      <Boundary
        label="[locale]/root-params/layout.tsx"
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-8"
      >
        {children}
      </Boundary>
    </>
  );
}
