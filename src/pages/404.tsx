import PracticeListLayout from "components/general/layout/practice/PracticeListLayout"
import { NextPageWithLayout } from "interface/general"
import Link from "next/link"
import { useRouter } from "next/router"

/*
このファイルはビルド時に静的に生成される
ビルド時にデータ取得が必要であるのならば、getStaticPropsもりようできる
*/
const Cutsom404Page: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <div className="text-center">
      <h1>404 - Page Not Found</h1>
      <h2>{`${router.asPath} は存在しません `}</h2>
      <div className="btn">
        <Link href="/">Homeに戻る</Link>
      </div>
    </div>
  )
}

Cutsom404Page.getLayout = (page) => {
  return <PracticeListLayout>{page}</PracticeListLayout>
}

export default Cutsom404Page
