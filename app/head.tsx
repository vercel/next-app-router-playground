import { DefaultTags } from '#/ui/DefaultTags';

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>Next.js App Directory Playground</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}
