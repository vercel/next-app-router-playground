import { Info } from "@/ui/Info.server"
export default function Page(props: any) {
  return (
    <Info
      path={["app", "(default)"]}
      kind="page"
      type="server"
      url="/"
      data={{ props, useHeaders: {}, useCookies: {}, usePreviewData: {} }}
    ></Info>
  )
}
