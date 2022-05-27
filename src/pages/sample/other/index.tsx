import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"

const otherHome = () => {
  return <PracticeTitle>otherHome</PracticeTitle>
}

otherHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Other"} />}>{page}</PracticeLayout>
)
export default otherHome
