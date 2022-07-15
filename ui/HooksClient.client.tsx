import React from 'react';
import {
  usePathname,
  useSelectedLayoutSegment,
  useSearchParams,
} from 'next/dist/client/components/hooks-client';

const HooksClient = () => {
  const pathname = usePathname();
  const selectedLayoutSegement = useSelectedLayoutSegment();
  const searchParams = useSearchParams();

  return (
    <div className="overflow-x-auto rounded-xl bg-black py-4 px-2 text-sm text-white [color-scheme:dark]">
      <pre>
        {JSON.stringify(
          {
            usePathname: pathname,
            useSearchParams: searchParams,
            selectedLayoutSegement: selectedLayoutSegement,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
};

export default HooksClient;
