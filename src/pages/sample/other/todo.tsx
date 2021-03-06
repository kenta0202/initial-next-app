import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { MainTask } from "components/practice/other/todo/MainTask"

const todoPage = () => {
  return (
    <>
      <PracticeTitle>CustomAPIServer+useQuery+RTK</PracticeTitle>
      <MainTask />
    </>
  )
}

todoPage.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Other"} />}>{page}</PracticeLayout>
)
export default todoPage
