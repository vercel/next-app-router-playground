import { Info } from "@/ui/Info.server";
import "../../styles/globals.css";

export default function Root({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Checkout</title>
      </head>
      <body>
        <div className="mx-auto mt-12 w-full px-4 lg:max-w-screen-lg">
          <Info path={['app', '(minimal)']} kind="layout" type="server">
            <div className="space-y-6">{children}</div>
          </Info>
        </div>
      </body>
    </html>
  );
}
