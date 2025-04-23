import { notFound } from 'next/navigation';
import { getDemoMeta } from '#/app/_internal/demos';
import { getCategoriesBySection, getSectionBySlug } from '#/app/_internal/data';
import { Boundary } from '#/ui/boundary';
import { Tabs } from '#/ui/tabs';

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ section: string }>;
}) {
  const { section: sectionSlug } = await params;
  const section = getSectionBySlug(sectionSlug);
  if (!section) {
    notFound();
  }

  const demo = getDemoMeta('error');
  const categories = getCategoriesBySection(section?.id);

  return (
    <Boundary label="[section]/layout.tsx" className="flex flex-col gap-9">
      <Tabs
        basePath={`/${demo.slug}/${section.slug}`}
        items={[
          { text: 'All' },
          ...categories.map((x) => ({ text: x.name, slug: x.slug })),
        ]}
      />

      <div>{children}</div>
    </Boundary>
  );
}
