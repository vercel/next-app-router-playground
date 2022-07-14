import React from 'react';
import { usePathname } from 'next/dist/client/components/hooks-client';

const AddressBar = ({ query }: { query?: { k: string; v: string }[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center space-x-2 rounded-xl border border-zinc-800 bg-black px-4 py-3 text-zinc-500">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex space-x-1 text-sm font-medium">
        <div>
          <span className="px-2 text-zinc-400">acme.com</span>
        </div>
        {pathname ? (
          <>
            <span className="text-zinc-600">/</span>
            {pathname
              .split('/')
              .slice(2)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[segmentChange_1s_ease-in-out_1] rounded-lg  px-2 py-0.5 text-zinc-100"
                      >
                        {segment}
                      </span>
                    </span>

                    <span className="text-zinc-600">/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
        {query ? <>?{query.map(({ k, v }) => k + '=' + v).join('&')}</> : null}
      </div>
    </div>
  );
};

export default AddressBar;
