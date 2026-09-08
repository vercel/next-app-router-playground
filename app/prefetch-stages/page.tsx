import db, { type Product } from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { ProductCard } from '#/ui/product-card';
import Link from 'next/link';

export default function Page() {
  const products = db.product.findMany({ limit: 2 });

  return (
    <Boundary label="page.tsx (statically inferred)">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-300">
          Prefetch Stages{' '}
          <span className="font-mono tracking-tighter text-gray-600">(2)</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProductLink
            product={products[0]}
            href="/prefetch-stages/auto"
            linkLabel="<Link>"
            result="Product only"
          />
          <ProductLink
            product={products[1]}
            href="/prefetch-stages/full"
            linkLabel="<Link prefetch={true}>"
            result="Product + more products"
            prefetch
          />
        </div>
      </div>
    </Boundary>
  );
}

function ProductLink({
  product,
  href,
  linkLabel,
  result,
  prefetch,
}: {
  product: Product;
  href: string;
  linkLabel: string;
  result: string;
  prefetch?: true;
}) {
  const card = (
    <Boundary size="small" animateRerendering={false}>
      <div className="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5">
        <ProductCard product={product} animateEnter={true} compact />
        <div className="min-w-0">
          <div className="font-mono text-xs whitespace-nowrap text-gray-300">
            {linkLabel}
          </div>
          <div className="mt-3 font-medium text-gray-300 group-hover:text-white">
            {product.name}
          </div>
          <div className="mt-2 text-sm text-gray-500">{result}</div>
        </div>
      </div>
    </Boundary>
  );

  return prefetch ? (
    <Link href={href} prefetch={true}>
      {card}
    </Link>
  ) : (
    <Link href={href}>{card}</Link>
  );
}
