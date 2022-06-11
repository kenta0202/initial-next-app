import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { MainTag } from "components/practice/other/todo/MainTag"

const tagsPage = () => {
  return (
    <>
      <PracticeTitle>CustomAPIServer+useQuery+RTK</PracticeTitle>
      <MainTag />
    </>
  )
}

tagsPage.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Other"} />}>{page}</PracticeLayout>
)
export default tagsPage
