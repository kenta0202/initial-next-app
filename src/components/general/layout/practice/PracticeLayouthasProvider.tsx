import Footer from "components/general/Footer"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import Link from "next/link"
import { FC, ReactNode } from "react"
import { StateProvider } from "components/practice/other/context/StateProvider"

// インデックスシグネチャと呼ばれる型を付与→オブジェクトプロパティの型を一律で制約
type Props = {
  /*   children: ReactNode
  NavBarElement: ReactNode */
  [k: string]: ReactNode
}

const PracticeLayouthasProvider: FC<Props> = ({ children, NavBarElement }) => {
  return (
    <StateProvider>
      {/* 共有するコンポーネントを同じProviderでラップする */}
      {/* 一つのコンポーネントで何か変わると、
      他のコンポーネントも含めてまとめて全体で再レンダリングされてしまう
      →StateごとにProviderで分ける必要がある
      →RTKを使用
      */}

      <LayoutErrorBoundary>
        <div className="flex flex-col justify-center items-center min-h-screen ">
          {NavBarElement}
          <main className="flex flex-col flex-1 justify-center items-center mt-2 w-screen">
            {children}
          </main>
          <div className="cursor-pointer">
            <Link href={"/sample"}>
              <div className=" py-2 px-3  rounded border-whitegrey  hover:opacity-90  ">
                <div className="inline btn">SampleMenu</div>
              </div>
            </Link>
          </div>
          <Footer />
        </div>
      </LayoutErrorBoundary>
    </StateProvider>
  )
}

export default PracticeLayouthasProvider
