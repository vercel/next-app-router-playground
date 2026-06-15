import { cookies } from 'next/headers';

export async function SessionBadge() {
  const sessionId = (await cookies()).get('session-id')?.value ?? 'guest';
  return (
    <span className="font-mono text-[11px] text-gray-500">
      session <span className="text-pink-300">{sessionId}</span>
    </span>
  );
}
