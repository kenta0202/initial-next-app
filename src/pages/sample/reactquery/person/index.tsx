import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchPerson from "components/practice/reactquery/FetchPerson"
import { Suspense } from "react"
import NavBar from "components/practice/NavBar"

const Person = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchPerson />
    </Suspense>
  )
}

Person.getLayout = function getLayout(page) {
  return (
    <PracticeLayout sampleElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
  )
}
export default Person
