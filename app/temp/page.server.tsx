import { Boundary } from '@/ui/Boundary.server';
import { SectionLink } from '@/ui/SectionLink.server';
import { SkeletonCard } from '@/ui/SkeletonCard.server';

export default function Page() {
  return (
    <div className="space-y-12">
      <Boundary>
        <div className="space-y-4">
          <div className="text-xl font-medium text-zinc-500">Home</div>
          <div className="grid grid-cols-3 gap-6">
            <SectionLink
              href="/components/electronics"
              text="Client Components Only"
            >
              <SkeletonCard />
            </SectionLink>

            <SectionLink
              href="/components/clothing"
              text="Client and Server Components"
            >
              <SkeletonCard />
            </SectionLink>
          </div>
        </div>
      </Boundary>

      <div className="space-y-4">
        <div className="text-white">Notes</div>
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>...</li>
        </ul>
      </div>
    </div>
  );
}
