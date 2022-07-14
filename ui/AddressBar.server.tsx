import React from 'react';

export const AddressBar = ({
  path,
  query,
}: {
  path?: string[];
  query?: { k: string; v: string }[];
}) => {
  return (
    <div className="flex w-full items-center space-x-2 rounded-3xl bg-gray-100 px-4 py-2 text-gray-500">
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
      <div className="flex space-x-2">
        <div>
          <span className="text-gray-400">https://</span>
          <span className="text-gray-700">acme.com</span>
        </div>
        {path ? (
          <>
            <span className="text-gray-300">/</span>
            {path.map((segment) => {
              return (
                <React.Fragment key={segment}>
                  <span>
                    {/* We use a key here to force the component to be remounted, when remounted the CSS animation replays */}
                    <span
                      key={segment}
                      className="animate-[segmentChange_2s_ease-in-out_1] rounded-full bg-black/5 py-0.5 px-3 text-gray-600"
                    >
                      {segment}
                    </span>
                  </span>

                  <span className="text-gray-300">/</span>
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
