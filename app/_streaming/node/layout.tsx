import { Boundary } from '#/ui/boundary';
import { cookies } from 'next/headers';
import React from 'react';
import { CartCountProvider } from '../_components/cart-count-context';
import { Header } from '../_components/header';
import { Prose } from '#/ui/prose';
import Readme from './readme.mdx';

export const metadata = {
  title: 'Streaming (Node Runtime)',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartCount = Number((await cookies()).get('_cart_count')?.value || '0');

  return (
    <>
      <Prose className="mb-8">
        <Readme />
      </Prose>

      <Boundary animateRerendering={false} label={['Demo']} size="small">
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
