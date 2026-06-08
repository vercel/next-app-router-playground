import { Boundary } from '#/ui/boundary';
import { ProductCardSkeleton } from '#/ui/product-card';

export default function Loading() {
  return (
    <Boundary label="loading.tsx" animateRerendering={false}>
      <div className="flex flex-col gap-8">
        <Boundary
          label="<Recommendations>"
          size="small"
          color="blue"
          animateRerendering={false}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-300">
              Recommendations
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </Boundary>
      </div>
    </Boundary>
  );
}
