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
            href="/prefetch-stages/prefetch"
            label="await prefetch()"
          >
            Recommendations are included in the per-link prefetch.
          </ProductLink>
          <ProductLink
            product={products[1]}
            href="/prefetch-stages/navigation"
            label="await navigation()"
          >
            Recommendations wait until navigation.
          </ProductLink>
        </div>
      </div>
    </Boundary>
  );
}

function ProductLink({
  product,
  href,
  label,
  children,
}: {
  product: Product;
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} prefetch={true}>
      <Boundary label={label} size="small" animateRerendering={false}>
        <div className="grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-4">
          <ProductCard product={product} animateEnter={true} compact />
          <div className="min-w-0">
            <div className="font-medium text-gray-300 group-hover:text-white">
              {product.name}
            </div>
            <p className="mt-1 text-sm text-gray-500">{children}</p>
          </div>
        </div>
      </Boundary>
    </Link>
  );
}
