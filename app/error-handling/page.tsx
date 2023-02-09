import BuggyButton from '#/ui/BuggyButton';
import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-x-3">
        <h1 className="text-xl font-medium text-gray-400/80">
          错误处理
          {/* Error Handling */}
        </h1>
        <BuggyButton />
      </div>

      <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
        <li>
          `error.js`
          定义了路由段及其下方子项的错误边界。它可用于显示特定的错误信息，以及尝试从错误中恢复的功能。
          {/* `error.js` defines the error boundary for a route segment and the
          children below it. It can be used to show specific error information,
          and functionality to attempt to recover from the error. */}
        </li>
        <li>
          尝试导航页面并在嵌套布局内触发错误。请注意错误是如何隔离到该部分的，而应用程序的其余部分保持交互。
          {/* Trying navigation pages and triggering an error inside nested layouts.
          Notice how the error is isolated to that segment, while the rest of
          the app remains interactive. */}
        </li>
        <li>
          注意：错误边界在开发中还不起作用。
          {/* Note: Error boundaries don't yet work in development. */}
        </li>
      </ul>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/routing/error-handling">
          文档
        </ExternalLink>
      </div>
    </div>
  );
}
