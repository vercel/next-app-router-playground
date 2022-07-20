import { SectionLink } from '@/ui/SectionLink.server';

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <SectionLink useSoftPush={true} href="/layouts" text="Nested Layouts">
          <div className="rounded-2xl bg-zinc-900/80 p-4">
            <div className="space-y-3">
              <div className="h-3 w-4/5 rounded-lg bg-zinc-700" />
              <div className="h-[86px] space-y-2 rounded-lg border border-dashed border-zinc-700 p-3">
                <div className="flex h-full items-stretch space-x-3">
                  <div className="w-9 rounded-lg bg-zinc-700" />
                  <div className="flex-1 rounded-lg border border-dashed border-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </SectionLink>

        <SectionLink useSoftPush={true} href="/loading" text="Loading UI">
          <div className="rounded-2xl bg-zinc-900/80 p-4">
            <div className="space-y-3">
              <div className="h-3 w-4/5 rounded-lg bg-zinc-700" />
              <div className="relative h-[86px] overflow-hidden rounded-lg border border-dashed border-zinc-700 p-3 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
                <div className="flex h-full space-x-3">
                  <div className="w-9 rounded-lg bg-zinc-700" />
                  <div className="flex-1 space-y-3">
                    <div className="h-3 w-4/5 rounded-lg bg-zinc-700" />
                    <div className="h-3 rounded-lg bg-zinc-700" />
                    <div className="h-3 w-3/5 rounded-lg bg-zinc-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionLink>
      </div>
    </div>
  );
}
