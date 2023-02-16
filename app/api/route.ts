import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
  return NextResponse.json({ yo: new Date().toLocaleString() });
}
