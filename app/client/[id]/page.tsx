'use client';
import Link from 'next/link';
import { use } from 'react';

function Page() {
  // https://beta.nextjs.org/docs/data-fetching/fetching#use-in-client-components
  const { abilities } = use(
    use(fetch('https://pokeapi.co/api/v2/pokemon/ditto')).json(),
  );

  return (
    <div>
      <p className="text-teal-300">
        Ditto's first ability is called: {abilities[0].ability.name}!
      </p>

      <p>
        This was fetched with the line:{' '}
        <pre>
          <code>
            use( use( fetch("https://pokeapi.co/api/v2/pokemon/ditto") ).json()
          </code>
        </pre>
      </p>

      <p>
        Notice how you there was no spinner or loading screen, that is because{' '}
        <code>use</code> works in the same way as <code>await</code>
      </p>
      <p>
        and because of that the page was blocked until the data was fetched.
      </p>

      <p>
        If you're not using a client component, you can just use async/await
        instead!
      </p>
      <br />

      <p>
        <Link
          className="text-blue-400"
          href="// https://beta.nextjs.org/docs/data-fetching/fetching#use-in-client-components"
        >
          Click here
        </Link>{' '}
        to read more about it!
      </p>
    </div>
  );
}

export default Page;
