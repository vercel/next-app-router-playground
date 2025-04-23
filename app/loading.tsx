import { Boundary } from '#/ui/boundary';

export default function Loading() {
  return (
    <Boundary label="loading.tsx">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-gray-600">Loading...</h1>
      </div>
    </Boundary>
  );
}
