import { Breadcrumbs } from '#/app/_patterns/breadcrumbs/_components/breadcrumbs';

export default async function Page(props: {
  params: Promise<{
    all: string[];
  }>;
}) {
  const params = await props.params;

  const { all } = params;

  console.log(all);

  // Note: you could fetch breadcrumb data based on params here
  // e.g. title, slug, children/siblings (for dropdowns)
  const items = [
    ...all.map((param, index) => ({
      text: param,
      // build cumulative path by joining all segments up to current index
      href: `/${all.slice(0, index + 1).join('/')}`,
    })),
  ];

  console.log(items);
  return <Breadcrumbs items={items} />;
}
