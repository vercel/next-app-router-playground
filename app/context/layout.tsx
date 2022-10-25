import { fetchCategories } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary';
import { CounterProvider } from 'app/context/CounterContext';
import React from 'react';
import CategoryNav from './CategoryNav';
import ClickCounter from './ClickCounter';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  return (
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
  );
}
