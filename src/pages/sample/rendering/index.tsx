import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import { NextPageWithLayout } from "interface/general"

const RenderingHome: NextPageWithLayout = () => {
  return <div>index</div>
}

RenderingHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Rendering"} />}>{page}</PracticeLayout>
)

export default RenderingHome
