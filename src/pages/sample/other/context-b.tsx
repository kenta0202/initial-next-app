import PracticeLayouthasProvider from "components/general/layout/practice/PracticeLayouthasProvider"
import NavBar from "components/practice/common/NavBar"
import { ContextB } from "components/practice/other/ContextB"

const ContextBpage = () => {
  return <ContextB />
}

ContextBpage.getLayout = (page) => (
  <PracticeLayouthasProvider NavBarElement={<NavBar sampleName={"Other"} />}>
    {page}
  </PracticeLayouthasProvider>
)

export default ContextBpage
