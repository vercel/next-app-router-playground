export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h2 className="text-lg font-bold">@children Home</h2>
      <p>...</p>

      <h2 className="text-lg">
        <code>layout.js</code>
      </h2>
      <p>...</p>

      <h2 className="text-lg">
        <code>not-found.js</code> and <code>default.js</code>
      </h2>
      <p>
        It is up to the developer to decide what to render when a{' '}
        <code>@slot</code> does not contain a route segment that matches the
        current route.
      </p>

      <ul>
        <li>
          By default, the closest <code>not-found.js</code> UI will be rendered.
        </li>
        <li>
          <code>default.js</code> can be used to replace the{' '}
          <code>not-found.js</code> with more specific default UI.
        </li>
        <li>
          <code>default.js</code> can be used to return <code>null</code> and
          render nothing instead of the default <code>not-found.js</code> UI.
        </li>
      </ul>

      <h2 className="text-lg">
        <code>loading.js</code>
      </h2>
      <p>...</p>

      <h2 className="text-lg">
        <code>error.js</code>
      </h2>
      <p>...</p>
    </div>
  );
}
