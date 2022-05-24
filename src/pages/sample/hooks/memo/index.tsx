import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import { NextPageWithLayout } from "interface/general"
import Link from "next/link"

const useMemoHome: NextPageWithLayout = () => {
  return (
    <>
      <PracticeTitle>useMemo</PracticeTitle>
      <div className=" flex flex-col gap-5 md:flex-row md:text-2xl">
        <button className="btn">
          <Link href={"memo/func1"}>変数を返す関数のメモ化➀</Link>
        </button>
        <button className="btn">
          <Link href={"memo/func2"}>変数を返す関数のメモ化➁</Link>
        </button>
        <button className="btn">
          <Link href={"memo/componentfunc"}>コンポーネント関数のメモ化</Link>
        </button>
      </div>
      <PracticeTitle>React.memo</PracticeTitle>
      <div className=" flex flex-col gap-5 md:flex-row md:text-2xl">
        {" "}
        <button className="btn">
          <Link href={"memo/component"}>
            <div>コンポーネントのメモ化</div>
          </Link>
        </button>
      </div>
    </>
  )
}

useMemoHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
export default useMemoHome
