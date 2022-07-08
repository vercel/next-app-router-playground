import { Info } from "@/ui/Info.server"
export default function Page(props: any) {
  return (
    <Info
      path={["app", "(default)", "categories"]}
      kind="page"
      type="server"
      url="/categories"
      data={{ props, useHeaders: {}, useCookies: {}, usePreviewData: {} }}
    ></Info>
  )
}
