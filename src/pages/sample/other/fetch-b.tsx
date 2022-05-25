import PracticeLayouthasProvider from "components/general/layout/practice/PracticeLayouthasProvider"
import NavBar from "components/practice/NavBar"
import { ClassicalFetchB } from "components/practice/other/ClassicalFetchB"

const ClassicalFetchBPage = () => {
  return <ClassicalFetchB />
}

ClassicalFetchBPage.getLayout = (page) => (
  <PracticeLayouthasProvider NavBarElement={<NavBar sampleName={"Other"} />}>
    {page}
  </PracticeLayouthasProvider>
)

export default ClassicalFetchBPage
