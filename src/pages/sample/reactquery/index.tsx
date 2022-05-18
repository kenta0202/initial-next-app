import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const ReactQueryHome = () => {
  return <div>ReactQueryHome</div>
}

ReactQueryHome.getLayout = function getLayout(page) {
  return (
    <PracticeLayout sampleElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
  )
}

export default ReactQueryHome
