import Link from "next/link";
import { useRouter } from "next/router";

/*
このファイルはビルド時に静的に生成される
ビルド時にデータ取得が必要であるのならば、getStaticPropsもりようできる
*/
const Cutsom404Page = () => {
  const router = useRouter();

  return (
    <>
      <h1>404 - Page Not Found</h1>
      <h2>{router.asPath} ページは存在しません</h2>
      <Link href="/">ホームに戻る</Link>
    </>
  );
};

export default Cutsom404Page;
