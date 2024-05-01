import { Breadcrumbs } from '#/app/patterns/breadcrumbs/_components/breadcrumbs';

export default function Page({
  params: { all },
}: {
  params: {
    all: string[];
  };
}) {
  // Note: you could fetch breadcrumb data based on params here
  // e.g. title, slug, children/siblings (for dropdowns)
  const items = [
    {
      text: 'Home',
      href: '/patterns/breadcrumbs',
    },
    ...all.map((param) => ({
      text: param,
      href: `/patterns/breadcrumbs/${param}`,
    })),
  ];
  return <Breadcrumbs items={items} />;
}
