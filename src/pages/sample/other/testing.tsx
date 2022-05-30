import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import Testing from "components/test"

const TestingPage = () => {
  return <Testing />
}

TestingPage.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Other"} />}>{page}</PracticeLayout>
)

export default TestingPage
