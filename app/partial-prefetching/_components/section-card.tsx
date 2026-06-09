import type { ReactNode } from 'react';

type Tone = 'static' | 'cached' | 'private' | 'uncached';

const labels: Record<Tone, string> = {
  static: 'static',
  cached: "'use cache'",
  private: "'use cache: private'",
  uncached: 'uncached',
};

export function SectionCard({
  tone,
  title,
  children,
}: {
  tone: Tone;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-gray-900 px-5 py-4">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-gray-200">{title}</span>
        <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase">
          {labels[tone]}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export function SectionValue({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] tracking-wide text-gray-500 uppercase">
        {label}
      </span>
      <span className="font-mono text-sm text-gray-200">{value}</span>
      {hint ? <span className="text-[11px] text-gray-500">{hint}</span> : null}
    </div>
  );
}

export function SectionFallback({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] tracking-wide text-gray-500 uppercase">
        {children}
      </span>
      <span className="font-mono text-sm text-gray-500">streaming…</span>
    </div>
  );
}
