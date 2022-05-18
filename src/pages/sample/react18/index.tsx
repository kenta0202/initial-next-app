import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import React18NavBar from "components/general/layout/practice/navbar/React18NavBar"

const React18 = () => {
  return <div>React18 basic lesson</div>
}

React18.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<React18NavBar />}>{page}</PracticeLayout>
}

export default React18
