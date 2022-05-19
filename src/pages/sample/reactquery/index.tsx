import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const ReactQueryHome = () => {
  return <div className=" text-lg">ReactQueryHome</div>
}

ReactQueryHome.getLayout = function getLayout(page) {
  return (
    <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
  )
}

export default ReactQueryHome
