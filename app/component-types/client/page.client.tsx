import { usePathname } from 'next/dist/client/components/hooks-client';

export default function Page() {
  const pathname = usePathname();

  const date = new Date().toISOString();

  return (
    <div>
      <div className="text-xl font-medium text-white">{date}</div>
      <div className="text-white">
        <div>pathname</div>
        <div className="overflow-x-auto rounded-xl bg-white/30 py-4 px-2 text-sm [color-scheme:dark]">
          <pre className="">{JSON.stringify(pathname)}</pre>
        </div>
      </div>
    </div>
  );
}
