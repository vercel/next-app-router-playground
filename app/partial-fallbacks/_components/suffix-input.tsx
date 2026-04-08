'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function SuffixInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const suffix = searchParams.get('suffix') ?? '';

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('suffix', value);
    } else {
      params.delete('suffix');
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
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
        onChange={(e) => handleChange(e.target.value)}
        placeholder="type anything"
        className="w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-1.5 font-mono text-sm text-gray-300 placeholder:text-gray-700 focus:border-gray-600 focus:outline-none"
      />
    </div>
  );
}
