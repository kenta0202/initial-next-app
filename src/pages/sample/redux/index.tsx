import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"

const ReduxHome = () => {
  return <PracticeTitle>Home</PracticeTitle>
}

ReduxHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Redux"} />}>{page}</PracticeLayout>
)

export default ReduxHome
