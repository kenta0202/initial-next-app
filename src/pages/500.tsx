import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

/*
このファイルはビルド時に静的に生成される
ビルド時にデータ取得が必要であるのならば、getStaticPropsもりようできる
*/
const Cutsom500Page = () => {
  const router = useRouter();

  return (
    <>
      <h1>500 - Server-side error occurred</h1>
      <h2>{router.asPath}</h2>
      <Link href="/">ホームに戻る</Link>
    </>
  );
};

export default Cutsom500Page;
