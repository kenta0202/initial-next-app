import { Html, Head, Main, NextScript } from "next/document"

/* 全体の文書構造をカスタマイズ */
export default function Document() {
  return (
    <Html
      lang="ja"
      prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#"
    >
      <Head></Head>
      <body className="  text-xl md:text-base  md:font-medium">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
