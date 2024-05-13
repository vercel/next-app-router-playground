import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['parallel-routes/@views/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/parallel-routes"
          items={[
            {
              text: 'Home',
            },
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
      </div>
    </Boundary>
  );
}
