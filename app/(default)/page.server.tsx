import { Info } from '@/ui/Info.server';
import ClientCounter from './counter.client';

export async function getServerSideProps() {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
}

export default function Page(props: any) {
  return (
    <Info
      path={['app', '(default)']}
      kind="page"
      type="server"
      url="/"
      data={{ props, useHeaders: {}, useCookies: {}, usePreviewData: {} }}
    >
      {/* <ClientCounter /> */}
    </Info>
  );
}
