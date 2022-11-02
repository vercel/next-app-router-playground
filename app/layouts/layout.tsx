import { fetchCategories } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';
import React, { experimental_use as use } from 'react';
import CategoryNav from './CategoryNav';
import { ExplanationBlock } from 'app/ExplanationBlock';

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories());
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav categories={categories} />
        <ClickCounter />
      </div>
      <div>{children}</div>
      <ExplanationBlock
        description="A regular layout is defined inside folders in the app directory and only applies to route segments below it. By default, layouts in the file hierarchy are nested. This means if you add another `layout` file in `app/electronics`, the root layout (app/layout.js) would wrap the electronics layout, which would wrap route segments inside `electronics/*`."
        link="https://beta.nextjs.org/docs/routing/pages-and-layouts#layouts"
      />
    </div>
  );
}
