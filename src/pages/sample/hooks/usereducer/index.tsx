import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import Link from "next/link"

const useReducer = () => {
  return (
    <>
      <PracticeTitle>useReducer</PracticeTitle>
      <div className=" flex flex-col gap-5 md:flex-row md:text-2xl">
        <button className="btn">
          <Link href={"usereducer/count"}>Count</Link>
        </button>
        <button className="btn">
          <Link href={"usereducer/bank"}>Bank</Link>
        </button>
      </div>
    </>
  )
}

useReducer.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
export default useReducer
