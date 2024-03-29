import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { NextPageWithLayout } from "interface/general"
import Link from "next/link"

// useRefの役割は、➀データの保持、➁DOMの参照

const useRefHome: NextPageWithLayout = () => {
  return (
    <>
      <PracticeTitle>useRef</PracticeTitle>
      <div className=" flex flex-col gap-5 md:flex-row md:text-2xl">
        <button className="btn">
          <Link href={"useref/comparePrevCount"}>comparePrevCount</Link>
        </button>
        <button className="btn">
          <Link href={"useref/isInitialRender"}>isInitialRender</Link>
        </button>
        <button className="btn">
          <Link href={"useref/textArea"}>textArea</Link>
        </button>
      </div>
    </>
  )
}

useRefHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
export default useRefHome
