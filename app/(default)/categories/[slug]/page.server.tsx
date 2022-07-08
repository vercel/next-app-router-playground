import { Info } from "@/ui/Info.server"
export default function Page(props: any) {
  return (
    <Info
      path={["app", "(default)", "categories", "[slug]"]}
      kind="page"
      type="server"
      url="/categories/[slug]"
      data={{ props, useHeaders: {}, useCookies: {}, usePreviewData: {} }}
    ></Info>
  )
}
