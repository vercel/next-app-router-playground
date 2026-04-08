'use client';

import { createContext, useContext, useState } from 'react';

const SuffixContext = createContext('');

export const useSuffix = () => useContext(SuffixContext);

export function SuffixProvider({ children }: { children: React.ReactNode }) {
  const [suffix, setSuffix] = useState('');

  return (
    <SuffixContext value={suffix}>
      <div className="flex items-center gap-3">
        <label
          htmlFor="slug-suffix"
          className="text-sm whitespace-nowrap text-gray-500"
        >
          Slug suffix
        </label>
        <input
          id="slug-suffix"
          type="text"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          placeholder="type anything"
          className="w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-1.5 font-mono text-sm text-gray-300 placeholder:text-gray-700 focus:border-gray-600 focus:outline-none"
        />
      </div>
      {children}
    </SuffixContext>
  );
}
