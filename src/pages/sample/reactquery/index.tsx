import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReactQueryNavBar from "components/general/layout/practice/navbar/ReactQueryNavBar"

const ReactQueryHome = () => {
  return <div>ReactQueryHome</div>
}

ReactQueryHome.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<ReactQueryNavBar />}>{page}</PracticeLayout>
}

export default ReactQueryHome
