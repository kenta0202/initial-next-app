import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import { NextPageWithLayout } from "interface/general"
import Link from "next/link"

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
