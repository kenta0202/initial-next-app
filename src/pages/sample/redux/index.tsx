import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const ReduxHome = () => {
  return <div>ReduxHome</div>
}

ReduxHome.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<NavBar sampleName={"Redux"} />}>{page}</PracticeLayout>
}

export default ReduxHome
