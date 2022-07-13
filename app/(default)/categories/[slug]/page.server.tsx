import { Info } from '@/ui/Info.server';
import {
  useHeaders,
  useCookies,
  usePreviewData,
} from 'next/dist/client/components/hooks-server';
export default function Page(props: any) {
  const headers = useHeaders();
  const cookies = useCookies();
  const previewData = usePreviewData();
  return (
    <Info
      path={['app', '(default)', 'categories', '[slug]']}
      kind="page"
      type="server"
      url="/categories/[slug]"
      data={{
        props,
        useHeaders: headers,
        useCookies: cookies,
        usePreviewData: previewData,
      }}
    ></Info>
  );
}
