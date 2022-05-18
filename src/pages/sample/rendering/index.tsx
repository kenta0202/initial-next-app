import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const RenderingHome = () => {
  return <div>index</div>
}

RenderingHome.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<NavBar sampleName={"Rendering"} />}>{page}</PracticeLayout>
}

export default RenderingHome
