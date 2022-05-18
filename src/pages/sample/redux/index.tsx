import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReduxSampleNavBar from "components/general/layout/practice/navbar/ReduxNavBar"

const ReduxHome = () => {
  return <div>ReduxHome</div>
}

ReduxHome.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<ReduxSampleNavBar />}>{page}</PracticeLayout>
}

export default ReduxHome
