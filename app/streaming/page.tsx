import products from '#/lib/data/products';
import { ExternalLink } from '#/ui/ExternalLink';
import { ProductCard } from '#/ui/ProductCard';

export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
          Streaming with Suspense
        </h1>
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
            <li>
              Streaming allows you to progressively render and send units of the
              UI from the server to the client.
            </li>

            <li>
              This allows the user to see and interact with the most essential
              parts of the page while the rest of the content loads - instead of
              waiting for the whole page to load before they can interact with
              anything.
            </li>

            <li>
              Try navigating to one of the products below. Notice how some
              initial product information is loaded first and secondary
              information like other recommended products and customer reviews
              are progressively streamed in.
            </li>
          </ul>

          <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense">
            Docs
          </ExternalLink>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="col-span-4 lg:col-span-1">
            <ProductCard
              product={product}
              href={`/streaming/product/${product.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
