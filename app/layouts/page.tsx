import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">布局</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            {/* A layout is UI that is shared between multiple pages. On navigation,
            layouts preserve state, remain interactive, and do not re-render.
            Two or more layouts can also be nested. */}
            布局是在多个页面之间共享的 UI。在导航时，布局会保留状态、保持交互并且不会重新呈现。也可以嵌套两个或多个布局。
          </li>
          <li>
            {/* Try navigating between categories and sub categories. */}
            尝试在类别和子类别之间导航。
          </li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/routing/pages-and-layouts">
          文档
        </ExternalLink>
      </div>
    </div>
  );
}
