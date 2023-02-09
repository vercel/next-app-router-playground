import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        增量静态再生(Incremental Static Regeneration)
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            在此示例中，在构建时静态预呈现的三个帖子每 10 秒定期重新验证一次。
            {/* In this example, three posts that were statically pre-rendered at
            build time are periodically revalidated every 10 seconds. */}
          </li>
          <li>
            {/* Try navigating to each post and noting the timestamp of when the
            page was rendered. Refresh the page after 10 seconds to trigger a
            revalidation for the next request. Refresh again to see the
            revalidated page. */}
            尝试导航到每个帖子并记下页面呈现时间的时间戳。10秒后刷新页面以触发对下一个请求的重新验证。再次刷新以查看重新验证的页面。
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/fetching#revalidating-data">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
