import PracticeLayouthasProvider from "components/general/layout/practice/PracticeLayouthasProvider"
import NavBar from "components/practice/common/NavBar"
import { ContextA } from "components/practice/other/ContextA"

const ContextAPage = () => {
  return <ContextA />
}

ContextAPage.getLayout = (page) => (
  <PracticeLayouthasProvider NavBarElement={<NavBar sampleName={"Other"} />}>
    {page}
  </PracticeLayouthasProvider>
)

export default ContextAPage
