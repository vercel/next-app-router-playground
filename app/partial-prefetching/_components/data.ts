import { connection } from 'next/server';
import { cookies } from 'next/headers';

const PREFETCH_DELAY_MS = 0;
const RENDER_DELAY_MS = 2000;

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function now() {
  return new Date().toISOString().slice(11, 19);
}

// -- static ----------------------------------------------------------------

export function getStatic(page: string) {
  // Pure, deterministic. Goes into the static shell.
  return { page, generatedAt: 'build-time' };
}

// -- cached ----------------------------------------------------------------

export async function getCached(page: string, id: string) {
  'use cache';
  await delay(RENDER_DELAY_MS);
  const ts = now();
  console.log(`[partial-prefetching/${page}] CACHED RAN at ${ts} id=${id}`);
  return { page, id, value: Math.floor(Math.random() * 1_000_000), at: ts };
}

// -- private (per-user) ----------------------------------------------------

export async function getPrivate(page: string) {
  'use cache: private';
  await delay(RENDER_DELAY_MS);
  const session = (await cookies()).get('session-id')?.value ?? 'guest';
  const ts = now();
  console.log(`[partial-prefetching/${page}] PRIVATE RAN at ${ts} session: ${session}`);
  return { page, session, at: ts };
}

// -- uncached --------------------------------------------------------------

export async function getUncached(page: string) {
  await connection();
  await delay(RENDER_DELAY_MS);
  const ts = now();
  console.log(`[partial-prefetching/${page}] UNCACHED RAN at ${ts}`);
  return { page, value: Math.floor(Math.random() * 1_000_000), at: ts };
}

export const meta = { PREFETCH_DELAY_MS, RENDER_DELAY_MS };
