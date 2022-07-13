import { Info } from "@/ui/Info.server";
import {
  useHeaders,
  useCookies,
  usePreviewData,
} from "next/dist/client/components/hooks-server";
import ClientCounter from './counter.client';

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
  const previewData = usePreviewData();
  return (
    <Info
      path={['app', '(default)']}
      kind="page"
      type="server"
      url="/"
      data={{ props, useHeaders: headers,
        useCookies: cookies,
        usePreviewData: previewData, }}
    >
      {/* <ClientCounter /> */}
    </Info>
  );
}
