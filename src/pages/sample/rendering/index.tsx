import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReduxSampleNavBar from "components/general/layout/practice/navbar/ReduxNavBar"

const RenderingHome = () => {
  return <div>index</div>
}

RenderingHome.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<ReduxSampleNavBar />}>{page}</PracticeLayout>
}

export default RenderingHome
