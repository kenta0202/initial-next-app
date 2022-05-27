import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"

const HooksHome = () => {
  return <PracticeTitle>HooksHome</PracticeTitle>
}

HooksHome.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
export default HooksHome
