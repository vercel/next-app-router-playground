import type { ReactNode } from 'react';
import { Boundary } from '#/ui/boundary';

type Tone = 'static' | 'cached' | 'private' | 'uncached';

const config: Record<Tone, { label: string }> = {
  static: { label: 'static' },
  cached: { label: "'use cache'" },
  private: { label: "'use cache: private'" },
  uncached: { label: 'uncached' },
};

export function SectionCard({
  tone,
  children,
}: {
  tone: Tone;
  children: ReactNode;
}) {
  return (
    <Boundary
      label={config[tone].label}
      kind="solid"
      size="small"
      animateRerendering={false}
    >
      {children}
    </Boundary>
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

export function SectionFallback({ tone }: { tone: Tone }) {
  return (
    <SectionCard tone={tone}>
      <span className="font-mono text-sm text-gray-500">streaming…</span>
    </SectionCard>
  );
}
