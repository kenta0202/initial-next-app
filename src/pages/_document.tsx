import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="ja"
      prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#"
    >
      <Head />
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
