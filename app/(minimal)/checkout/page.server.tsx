import { Info } from '@/ui/Info.server';
export default function Page() {
  return (
    <Info
      path={['app', '(minimal)', 'checkout']}
      kind="page"
      type="server"
      url="/checkout"
    >
      <div className="text-xl">
        Notice this has a different layout to the rest of the app. E.g. No
        global menu.
      </div>
    </Info>
  );
}
