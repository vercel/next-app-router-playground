'client'

import React from 'react';
import {
  usePathname,
  useSelectedLayoutSegment,
  useSearchParams,
  useSearchParam,
} from 'next/dist/client/components/hooks-client';

const HooksClient = () => {
  const pathname = usePathname();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const searchParams = useSearchParams();
  const searchParam = useSearchParam('key');

  return (
    <div className="overflow-x-auto rounded-xl py-4 px-2 text-sm text-white [color-scheme:dark]">
      <pre>
        {JSON.stringify(
          {
            usePathname: pathname,
            selectedLayoutSegment: selectedLayoutSegment,
            useSearchParams: searchParams,
            "useSearchParam('key')": searchParam,
            useRouter: {
              push: '(string) => void',
              softPush: '(string) => void',
              replace: '(string) => void',
              softReplace: '(string) => void',
              reload: '() => void',
              prefetch: '() => Promise<void>',
            },
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
};

export default HooksClient;
