import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/isr/[id]';
  const collection =
    request.nextUrl.searchParams.get('collection') || 'collection';
  revalidatePath(path);
  revalidateTag(collection);
  console.log('revalidated', path, collection);
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    cache: 'no-store',
  });
}
