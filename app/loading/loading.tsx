import { SkeletonCard } from '#/ui/SkeletonCard';
export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Loading...</div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
      </div>
    </div>
  );
}
