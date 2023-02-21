'use client';

import { Boundary } from '#/ui/boundary';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const getMetaContent = (name: string) =>
  document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content ||
  '';

const getHeadTags = () => {
  if (typeof window === 'undefined') {
    // Basic initial server state to avoid content layout shift
    return {
      title: '',
      description: '',
      viewport: '',
      favicon: '',
    };
  }

  return {
    title: document.title || '',
    description: getMetaContent('description'),
    viewport: getMetaContent('viewport'),
    favicon:
      document.querySelector<HTMLLinkElement>(`link[rel="shortcut icon"]`)
        ?.href || '',
  };
};

export function HeadInfo() {
  const [tags, setTags] = useState(
    // Avoid a content layout shift by returning tags in the initial render
    getHeadTags,
  );
  const pathname = usePathname();

  // Ensure tags are updated on page navigation
  useEffect(() => {
    setTags(getHeadTags);
  }, [pathname]);

  return (
    <Boundary
      size="small"
      labels={['Configured <head> tags']}
      color="blue"
      animateRerendering={false}
    >
      <div className="overflow-x-auto text-sm text-white [color-scheme:dark]">
        <pre
          // We expect the server and client initial state to be different
          // because `document` doesn't exist on the server.
          suppressHydrationWarning
        >
          {JSON.stringify(tags, null, 2)}
        </pre>
      </div>
    </Boundary>
  );
}
