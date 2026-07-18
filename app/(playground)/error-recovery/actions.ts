'use server';

import { redirect } from 'next/navigation';
import { resetTransientReport } from './_lib/unstable-data';

export async function resetCatchErrorDemoAction() {
  resetTransientReport('catchError');
  redirect('/error-recovery/catch-error');
}

export async function resetErrorTsxDemoAction() {
  resetTransientReport('error.tsx');
  redirect('/error-recovery/error-tsx');
}
