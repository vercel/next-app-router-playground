import { experimental_use as use } from 'react';
import { fetchCategories } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';
import React from 'react';
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
        description="Next.js 13 introduced a new file convention, `error.js`, to help you handle errors in your application. This convention, allows you to show a fallback if an error is thrown within the route subtree. `error.js` defines the error boundary for a route segment and the children below it. It can be used to show specific error information, and functionality to attempt to recover from the error."
        link="https://beta.nextjs.org/docs/routing/error-handling"
      />
    </div>
  );
}
