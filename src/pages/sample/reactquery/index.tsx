import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"

const ReactQueryHome = () => {
  return <PracticeTitle>ReactQueryHome</PracticeTitle>
}

ReactQueryHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)

export default ReactQueryHome
