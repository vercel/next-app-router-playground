import { Boundary } from '#/ui/Boundary';
import { cookies } from 'next/headers';
import React from 'react';
import { CartCountProvider } from '../_components/CartCountContext';
import { Header } from '../_components/Header';

export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = Number(cookies().get('_cart_count')?.value || '0');

  return (
    <>
      <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300 mb-12">
        <li>
          Primary product information is loaded first as part of the initial
          response.
        </li>
        <li>
          Secondary, more personalized details (that might be slower) like ship
          date, other recommended products, and customer reviews are
          progressively streamed in.
        </li>
        <li>Try refreshing or navigating to other recommended products.</li>
      </ul>
      <Boundary animateRerendering={false} labels={['Demo']} size="small">
        <CartCountProvider initialCartCount={cartCount}>
          <div className="space-y-10">
            <Header />

            {children}
          </div>
        </CartCountProvider>
      </Boundary>
    </>
  );
}
