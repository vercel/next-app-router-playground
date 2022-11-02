import React, { experimental_use as use } from 'react';
import { fetchCategories } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';
import CategoryNav from './CategoryNav';
import { ExplanationBlock } from 'app/ExplanationBlock';

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories());
  if (!categories) return null;

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav categories={categories} />
        <ClickCounter />
      </div>

      <div>{children}</div>
      <ExplanationBlock
        description="Next.js 13 introduced a new file convention, `loading.js`, which allows you to show an instant loading state from the server while the content of a route segment loads, the new content is automatically swapped in once rendering is complete."
        link="https://beta.nextjs.org/docs/routing/loading-ui"
      />
    </div>
  );
}
