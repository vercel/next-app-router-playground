'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'partial-fallbacks-suffix';

export function SessionSuffix() {
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSuffix(stored);
    } else {
      const next = Math.random().toString(36).slice(2, 8);
      sessionStorage.setItem(STORAGE_KEY, next);
      setSuffix(next);
    }
  }, []);

  function regenerate() {
    const next = Math.random().toString(36).slice(2, 8);
    sessionStorage.setItem(STORAGE_KEY, next);
    window.location.reload();
  }

  if (!suffix) return null;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500">
        Session suffix:{' '}
        <code className="text-gray-400">{suffix}</code>
      </span>
      <button
        onClick={regenerate}
        className="cursor-pointer rounded-full bg-gray-800 px-2.5 py-1 text-[11px] font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-gray-300"
      >
        Regenerate
      </button>
    </div>
  );
}
