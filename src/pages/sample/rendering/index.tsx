import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { NextPageWithLayout } from "interface/general"

const RenderingHome: NextPageWithLayout = () => {
  return <PracticeTitle>Home</PracticeTitle>
}

RenderingHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Rendering"} />}>{page}</PracticeLayout>
)

export default RenderingHome
