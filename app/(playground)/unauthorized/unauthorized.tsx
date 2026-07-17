import { Boundary } from '#/ui/boundary';

export default function Unauthorized() {
  return (
    <Boundary label="unauthorized.tsx" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-gray-100">Unauthorized</h1>
        <div className="text-sm text-gray-400">
          Please sign in to access this page
        </div>
      </div>

      <div className="flex">
        <a
          href="/unauthorized"
          className="rounded-md bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-100 hover:bg-gray-500 hover:text-white"
        >
          Home
        </a>
      </div>
    </Boundary>
  );
}
