import clsx from 'clsx';
import type { ReactNode } from 'react';

type Tone = 'static' | 'cached' | 'private' | 'uncached';

const tones: Record<Tone, { label: string; ring: string; badge: string; dot: string }> = {
  static: {
    label: 'static',
    ring: 'ring-1 ring-gray-700',
    badge: 'bg-gray-800 text-gray-300',
    dot: 'bg-gray-400',
  },
  cached: {
    label: "'use cache'",
    ring: 'ring-1 ring-purple-900',
    badge: 'bg-purple-950 text-purple-300',
    dot: 'bg-purple-400',
  },
  private: {
    label: "'use cache: private'",
    ring: 'ring-1 ring-amber-900',
    badge: 'bg-amber-950 text-amber-300',
    dot: 'bg-amber-400',
  },
  uncached: {
    label: 'uncached',
    ring: 'ring-1 ring-rose-900',
    badge: 'bg-rose-950 text-rose-300',
    dot: 'bg-rose-400',
  },
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
  const t = tones[tone];
  return (
    <div className={clsx('flex flex-col gap-3 rounded-lg bg-gray-900 p-4', t.ring)}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-gray-500 uppercase">
          {title}
        </span>
        <span
          className={clsx(
            'flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] font-medium',
            t.badge,
          )}
        >
          <span className={clsx('h-1.5 w-1.5 rounded-full', t.dot)} />
          {t.label}
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
      <span className="text-[11px] tracking-wide text-gray-500 uppercase">{label}</span>
      <span className="font-mono text-sm text-gray-200">{value}</span>
      {hint ? <span className="text-[11px] text-gray-500">{hint}</span> : null}
    </div>
  );
}

export function SectionFallback({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] tracking-wide text-gray-500 uppercase">{children}</span>
      <span className="font-mono text-sm text-gray-500">streaming…</span>
    </div>
  );
}
