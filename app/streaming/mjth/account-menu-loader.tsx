import AccountMenuLoaded from './account-menu-loaded';

export default async function AccountMenuLoader() {
  const data = await fetch(
    `https://app-dir.vercel.app/api/products?delay=1000`,
    {
      cache: 'no-store',
    },
  );

  const json = await data.json();
  return <AccountMenuLoaded data={json} />;
}
