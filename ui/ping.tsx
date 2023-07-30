export function Ping() {
  return (
    <span className="flex h-[11px] w-[11px]">
      <span className="bg-vercel-pink absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
      <span className="bg-vercel-pink relative inline-flex h-[11px] w-[11px] rounded-full"></span>
    </span>
  );
}
