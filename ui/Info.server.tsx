import clsx from 'clsx';
import React from 'react';

/**
 *
 * TODO
 * - Make table collapsible
 * - Get as much debug info from hooks/props as possible. E.g. pathnames and urls
 * - Use CSS animation to indicate when a layout/page re-renders `animate-[mutation_2s_ease-in-out_1]`
 * - use SVG defs I use icons
 * - UI to callout important notes
 */

export function Info({
  path,
  url,
  type,
  kind,
  data,
  children,
}: {
  path: string[];
  url?: string;
  children?: React.ReactNode;
  type: 'server' | 'client';
  kind: 'layout' | 'page';
  data?: any;
}) {
  return (
    <div
      className={clsx('xx rounded-lg border-2', {
        'border-blue-200 bg-blue-50': type === 'server',
        'border-purple-200 bg-purple-50': type === 'client',
      })}
    >
      <div
        className={clsx('flex space-x-1 rounded-t-md px-2 py-1 text-sm', {
          'bg-blue-200': type === 'server',
          'bg-purple-200': type === 'client',
        })}
      >
        <div className="text-black/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {type === 'server' ? (
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </div>

        {path.map((segment) => (
          <React.Fragment key={segment}>
            <div className="text-black/60">{segment}</div>
            <div className="text-black/30">/</div>
          </React.Fragment>
        ))}

        <div className="font-medium text-black/90">{kind}.js</div>

        {url ? (
          <>
            <div className="text-blue-400">→</div>
            <div className="text-gray-400">{url}</div>
          </>
        ) : null}
      </div>

      <div className="space-y-6 p-6">
        {data ? (
          <div className="flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Key
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {key}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <pre>{JSON.stringify(value, null, 2)}</pre>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {children}
      </div>
    </div>
  );
}
