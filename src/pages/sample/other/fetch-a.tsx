import PracticeLayouthasProvider from "components/general/layout/practice/PracticeLayouthasProvider"
import NavBar from "components/practice/NavBar"
import { ClassicalFetchA } from "components/practice/other/ClassicalFetchA"

const ClassicalFetchAPage = () => {
  return <ClassicalFetchA />
}

ClassicalFetchAPage.getLayout = (page) => (
  <PracticeLayouthasProvider NavBarElement={<NavBar sampleName={"Other"} />}>
    {page}
  </PracticeLayouthasProvider>
)

export default ClassicalFetchAPage
