import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import Link from "next/link"

const useEffect = () => {
  return (
    <>
      <PracticeTitle>useEffect</PracticeTitle>
      <div className=" flex flex-col gap-5 md:flex-row md:text-2xl">
        <button className="btn">
          <Link href={"useeffect/creenup"}>CountDown+Creenup</Link>
        </button>
        <button className="btn">
          <Link href={"useeffect/datafetch"}>DataFetching+Creenup+Search</Link>
        </button>
      </div>
    </>
  )
}

useEffect.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
export default useEffect
