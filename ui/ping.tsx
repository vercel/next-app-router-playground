export function Ping() {
  return (
    <span className="flex size-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-pink-500"></span>
    </span>
  );
}
