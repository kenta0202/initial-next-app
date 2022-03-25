import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from 'utils/Blog/Constants';

type Props = {
  title: string;
};

export const HeadInformation: React.VFC<Props> = ({ title }: Props) => {
  const router = useRouter();
  return (
    <Head>
      <title>
        {title
          ? title
          : router.pathname.slice(1).charAt(0).toUpperCase() + router.pathname.slice(2)}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* モバイルブラウザ向けのビューポートの大きさの設定を表す
      初期状態では1.0倍（実サイズ）で表示
      ビューポートの幅をその機器の画面の幅と一致
      */}
      <meta name="description" content={SITE_DESCRIPTION} />
      {/* Webページの概要や内容などを指定 */}
      <meta name="theme-color" content="#5588cc" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fa811e" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2894bf" />
      {/* ブラウザのバーの色を変更 */}
      <meta name="format-detection" content="telephone=no, email=no address=no" />
      {/* スマホの関連するアプリにリンクする拡張の無効化 */}
      <meta charSet="utf-8" />
      {/* 文字コードの設定 日本語で記述するサイトであれば「utf-8」*/}
      <meta name="author" content="kenta0202" />
      {/* 著者名や会社名などを指定 */}
      <meta name="keywords" content={SITE_KEYWORDS} />
      {/* Webページの内容に関係するキーワード */}
      <meta name="referrer" content="same-origin" />
      {/* “name="referrer"”が指定された“meta”要素は文書からリクエストを送信するときのデフォルトのリファラーポリシーを表す。 */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* （Internet Explorer）を使っている人向けに、指定したバージョンで表示させる */}
      {/* <meta name="robots" content="noindex,nofollow" /> */}
      {/* 指定したページを検索結果に載せたくない場合に記述します。
            ・noindex：検索結果にインデックス（掲載）しない
            ・nofollow：クローラーに巡回させない */}
      {/*  OGPの設定  */}
      {/* OGPタグ:SNSとWebページの情報を連携させる際に記述するタグ */}
      <meta property="og:type" content="blog" /> {/* 表示するページの種類 */}
      <meta property="og:title" content={SITE_NAME} />
      {/* ページのタイトルを指定します。titleタグで設定したタイトルと同様のものを記述するのが一般的ですが、別のタイトルを記載すると、og:titleのタイトルが優先される。 */}
      <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
      {/* 表示するページのURLを指定します。URLは絶対パスで記述。 */}
      <meta property="og:description" content={SITE_DESCRIPTION} />
      {/* og:descriptionの適した文字数は80～90文字程度 */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${SITE_URL}/ogp.png`} />
      {/* Webの記事やページがSNSでシェアされた際に表示されるサムネイルとなる画像を指定 */}
      {/* Twitterカードの設定 */}
      <meta name="twitter:card" content="summary" />
      {/* サマリーカードの場合は”summary“、大型画像付きサマリーカードの場合は”summary_large_image”と指定 */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* ホームページをスマホのホーム画面に追加した時に表示される画像のこと */}
      {/* デザイン上、自動処理を行なわれたく無い場合には、apple-touch-icon-precomposedを指定 */}
    </Head>
  );
};
