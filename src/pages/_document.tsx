import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="ja"
      prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#"
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
