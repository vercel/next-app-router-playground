import { getDemoMeta } from '#/app/_internal/demos';
import { Boundary } from '#/ui/boundary';
import { Tabs } from '#/ui/tabs';

export default function Layout({ children }: { children: React.ReactNode }) {
  const demo = getDemoMeta('parallel-routes');

  return (
    <Boundary
      label="@views/layout.tsx"
      size="small"
      className="flex flex-col gap-6"
    >
      <Tabs
        basePath={`/${demo.slug}`}
        items={[
          { text: 'Home' },
          {
            text: 'Impressions',
            slug: 'impressions',
          },
          {
            text: 'View Duration',
            slug: 'view-duration',
          },
        ]}
      />
      {children}
    </Boundary>
  );
}
