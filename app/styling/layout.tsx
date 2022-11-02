import React from 'react';
import StylingNav from './StylingNav';
import { ExplanationBlock } from 'app/ExplanationBlock';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <StylingNav />
      <div>{children}</div>
      <ExplanationBlock
        description="Global styles can be imported into any layout, page, or component inside the app directory. Next.js also has built-in support for CSS Modules using the `.module.css` extension. CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same class name in different files without worrying about collisions. CSS Modules can be imported into any file inside the app directory."
        link="https://beta.nextjs.org/docs/styling/css-modules"
      />
    </div>
  );
}
