import { Boundary } from '#/ui/boundary';
import { Tabs } from '#/ui/tabs';

export default function Page() {
  return (
    <Boundary label="page.tsx">
      <Tabs
        basePath="/error-recovery"
        items={[
          { text: 'catchError', slug: 'catch-error' },
          { text: 'error.tsx', slug: 'error-tsx' },
        ]}
      />
    </Boundary>
  );
}
