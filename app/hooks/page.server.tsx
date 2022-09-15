import { Boundary } from '@/ui/Boundary.server';

export default function Page() {
  return (
    <div className="space-y-12">
      <Boundary>
        <div className="text-xl font-medium text-zinc-500">Home</div>
      </Boundary>
    </div>
  );
}
