export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">
        Incremental Static Regeneration
      </div>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-300">
          <li>
            Next.js allows you to create or update static pages after you’ve
            built your site. Incremental Static Regeneration (ISR) enables you
            to use static-generation on a per-page basis, without needing to
            rebuild the entire site. With ISR, you can retain the benefits of
            static while scaling to millions of pages.
          </li>
        </ul>
      </div>

      <div>
        <a
          className="font-medium text-zinc-300 hover:text-white"
          href="https://beta.nextjs.org/docs/routing/loading-ui"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
