import { CurrentRoute } from '#/app/parallel-routes/_ui/current-route';
import { Boundary } from '#/ui/boundary';

export default function Default() {
  return (
    <Boundary
      labels={['parallel-routes/default.tsx']}
      color="blue"
      size="small"
    >
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Default UI</h2>

        <p>Default UI is rendered because:</p>

        <ul>
          <li>
            The implicit <code>@children</code> slot does not contain a route
            segment that matches the current{' '}
            <code>
              <CurrentRoute slice={1} />
            </code>{' '}
            route.
          </li>

          <li>
            <code>
              parallel-routes/
              <CurrentRoute />
              /page.js
            </code>{' '}
            does not exist.
          </li>

          <li>
            <code>
              parallel-routes/@children/
              <CurrentRoute />
              /page.js
            </code>{' '}
            does not exist.
          </li>

          <li>
            <code>parallel-routes/default.js</code> exists.
          </li>
        </ul>
      </div>
    </Boundary>
  );
}
