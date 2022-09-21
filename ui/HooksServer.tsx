import React from 'react';
import {
  useCookies,
  useHeaders,
  usePreviewData,
} from 'next/dist/client/components/hooks-server';

const HooksServer = () => {
  const cookies = useCookies();
  const headers = useHeaders();
  const previewData = usePreviewData();

  return (
    <div className="overflow-x-auto rounded-xl py-4 px-2 text-sm text-white [color-scheme:dark]">
      <pre>
        {JSON.stringify(
          {
            useCookies: cookies,
            useHeaders: headers,
            usePreviewData: previewData,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
};

export default HooksServer;
