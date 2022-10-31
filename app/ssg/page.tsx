export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">
        Static-Site Generation
      </div>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            With Static Site Generation, the HTML is generated on the server,
            but unlike server-side rendering, there is no server at runtime.
            Instead, content is generated once, at build time, when the
            application is deployed, and the HTML is stored in a CDN and re-used
            for each request.
          </li>
        </ul>
      </div>

      <div>
        <a
          className="font-medium text-zinc-300 hover:text-white"
          href="https://beta.nextjs.org/docs/data-fetching/fetching#static-data"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
