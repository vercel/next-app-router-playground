export default function NotFound() {
  return (
    <div className="space-y-2" data-testid="param-not-found">
      <h1 className="text-xl font-medium text-gray-200">
        Parameter not admitted or product not found
      </h1>
      <p className="text-sm text-gray-400">
        The not-found policy rejects values absent from generateStaticParams().
        For admitted values, the product query can still return notFound() if
        the product does not exist.
      </p>
    </div>
  );
}
