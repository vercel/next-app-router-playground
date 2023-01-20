export function Ping() {
  return (
    <span className="flex h-[11px] w-[11px]">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vercel-pink opacity-75"></span>
      <span className="relative inline-flex rounded-full h-[11px] w-[11px] bg-vercel-pink"></span>
    </span>
  );
}
