import AccountMenuLoader from './account-menu-loader';
import { Suspense } from 'react';

export default function AccountMenu() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      {/* @ts-expect-error */}
      <AccountMenuLoader />
    </Suspense>
  );
}
