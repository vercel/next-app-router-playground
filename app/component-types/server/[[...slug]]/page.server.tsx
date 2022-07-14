import {
  useCookies,
  useHeaders,
} from 'next/dist/client/components/hooks-server';

export async function getServerSideProps() {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
}

export default function Page(props: any) {
  const headers = useHeaders();
  const cookies = useCookies();

  return (
    <div className="space-y-6 text-white">
      <div className="text-xl font-bold">Props</div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="font-medium">`params`</div>
          <div className="overflow-x-auto rounded-xl bg-white/20 py-4 px-2 text-sm [color-scheme:dark]">
            <pre>{JSON.stringify(props.params, null, 2)}</pre>
          </div>
        </div>

        {/* TODO: Update to searchParams after `https://github.com/vercel/next.js/pull/38654` */}
        <div className="space-y-2">
          <div className="font-medium">`query`</div>
          <div className="overflow-x-auto rounded-xl bg-white/20 py-4 px-2 text-sm [color-scheme:dark]">
            <pre>{JSON.stringify(props.query, null, 2)}</pre>
          </div>
        </div>
      </div>

      <div className="text-xl font-bold">Hooks</div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="font-medium">useCookies()</div>
          <div className="overflow-x-auto rounded-xl bg-white/20 py-4 px-2 text-sm [color-scheme:dark]">
            <pre>{JSON.stringify(cookies, null, 2)}</pre>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-medium">useHeaders()</div>
          <div className="overflow-x-auto rounded-xl bg-white/20 py-4 px-2 text-sm [color-scheme:dark]">
            <pre>{JSON.stringify(headers, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
