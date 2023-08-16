import { Providers } from "@/redux/providers";
import ApplicationLayout from "@/components/ApplicationLayout/ApplicationLayout";
import "@/styles/styles.scss";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <title>NextJs, Redux, Redux-Toolkit - Boilerplate</title>

          {/* Mobile Devices */}
          <meta name="theme-color" content="#333333" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          {/* Icon */}
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="icon shortcut" type="image/png" href="/favicon.ico" />
        </head>
        <body>
          <ApplicationLayout>{children}</ApplicationLayout>
        </body>
      </html>
    </Providers>
  );
}
