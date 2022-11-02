import { fetchCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import { CounterProvider } from 'app/context/CounterContext';
import React, { experimental_use as use } from 'react';
import CategoryNav from './CategoryNav';
import ClickCounter from './ClickCounter';
import { ExplanationBlock } from 'app/ExplanationBlock';

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories());
  return (
    <div className="space-y-4">
      <Boundary
        labels={['Server Component Boundary']}
        size="small"
        animateRerendering={false}
      >
        <Boundary
          labels={['Counter Context Provider [Client Component]']}
          color="blue"
          size="small"
          animateRerendering={false}
        >
          <CounterProvider>
            <Boundary
              labels={['Server Component Boundary']}
              size="small"
              animateRerendering={false}
            >
              <div className="space-y-9">
                <div className="flex items-center justify-between">
                  <CategoryNav categories={categories} />
                </div>

                <ClickCounter />
                <div>{children}</div>
              </div>
            </Boundary>
          </CounterProvider>
        </Boundary>
      </Boundary>
      <ExplanationBlock
        description="A regular layout is defined inside folders in the app directory and only applies to route segments below it. By default, layouts in the file hierarchy are nested. This means if you add another `layout` file in `app/electronics`, the root layout (app/layout.js) would wrap the electronics layout, which would wrap route segments inside `electronics/*`."
        link="https://beta.nextjs.org/docs/rendering/server-and-client-components#using-context"
      />
    </div>
  );
}
