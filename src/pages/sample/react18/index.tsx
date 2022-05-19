import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"

const React18 = () => {
  return <div className=" text-lg">React18 basic lesson</div>
}

React18.getLayout = function getLayout(page) {
  return <PracticeLayout NavBarElement={<NavBar sampleName={"React18"} />}>{page}</PracticeLayout>
}

export default React18
