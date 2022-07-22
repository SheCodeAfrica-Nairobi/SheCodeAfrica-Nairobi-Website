import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        {/* manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body className="flex min-h-screen flex-col items-center justify-start py-2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
