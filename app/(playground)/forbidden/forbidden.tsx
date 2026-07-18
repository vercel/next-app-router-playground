import { Boundary } from '#/ui/boundary';

export default function Forbidden() {
  return (
    <Boundary label="forbidden.tsx" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-gray-100">Forbidden</h1>
        <div className="text-sm text-gray-400">
          You are signed in, but do not have access to this page
        </div>
      </div>

      <div className="flex">
        <a
          href="/forbidden"
          className="rounded-md bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-100 hover:bg-gray-500 hover:text-white"
        >
          Home
        </a>
      </div>
    </Boundary>
  );
}
