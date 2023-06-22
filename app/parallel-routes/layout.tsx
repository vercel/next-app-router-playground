import { HooksClient } from '#/app/hooks/_components/router-context';
import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';

export default function Layout({
  children,
  audience,
  views,
}: {
  children: React.ReactNode;
  audience: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        <Boundary labels={['@children']} size="small">
          {children}
        </Boundary>

        <div className="space-y-6">
          <Boundary labels={['@audience']} size="small">
            <div className="space-y-8">
              <TabGroup
                path="/parallel-routes"
                parallelRoutesKey="audience"
                items={[
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
                ]}
              />
              {audience}
            </div>
          </Boundary>

          <Boundary labels={['@views']} size="small">
            <div className="space-y-8">
              <TabGroup
                path="/parallel-routes"
                parallelRoutesKey="views"
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
              {views}
            </div>
          </Boundary>
        </div>
      </div>
      <HooksClient />
    </div>
  );
}
