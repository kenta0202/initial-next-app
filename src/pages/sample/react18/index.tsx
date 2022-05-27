import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"

const React18 = () => {
  return <PracticeTitle>React18 Practice</PracticeTitle>
}

React18.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"React18"} />}>{page}</PracticeLayout>
)

export default React18
