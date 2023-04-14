import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="description" content="Check out my portfolio website." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
