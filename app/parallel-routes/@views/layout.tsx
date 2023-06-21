import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';

const items = [
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
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['@views']} size="small">
      <div className="space-y-8">
        <TabGroup path="/parallel-routes" items={items} />
        {children}
      </div>
    </Boundary>
  );
}
