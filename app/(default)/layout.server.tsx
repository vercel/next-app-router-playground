import { Info } from "@/ui/Info.server"
import Link from "next/link"

export default function Root({ children, ...props }: { children: any }) {
  const menuItems = [
    { slug: "/", title: "Home" },
    { slug: "/categories", title: "Categories" },
    { slug: "cart", title: "Cart" },
    { slug: "checkout", title: "Checkout" },
  ]

  return (
    <html>
      <head>
        <title>V Store</title>
        <link rel="stylesheet" href="/output.css" />
      </head>
      <body>
        <div className="mx-auto mt-12 w-full px-4 lg:max-w-screen-lg">
          <Info
            path={["app", "(default)"]}
            kind="layout"
            type="server"
            data={{
              props,
              useHeaders: {},
              useCookies: {},
              usePreviewData: {},
            }}
          >
            <div className="space-y-6">
              <div className="flex space-x-3">
                {menuItems.map(({ slug, title }) => (
                  <div key={slug}>
                    <Link href={slug}>{title}</Link>
                  </div>
                ))}
              </div>

              {children}
            </div>
          </Info>
        </div>
      </body>
    </html>
  )
}
