import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';

const items = [
  {
    text: 'Home',
  },
  {
    text: 'Demographics',
    slug: 'demographics',
  },
  {
    text: 'Subscribers',
    slug: 'subscribers',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['@audience']} size="small">
      <div className="space-y-8">
        <TabGroup path="/parallel-routes" items={items} />
        {children}
      </div>
    </Boundary>
  );
}
