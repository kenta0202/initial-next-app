import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReactQueryNavBar from "components/general/layout/practice/navbar/ReactQueryNavBar"
import FetchPerson from "components/practice/reactquery/FetchPerson"
import { Suspense } from "react"

const Person = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchPerson />
    </Suspense>
  )
}

Person.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<ReactQueryNavBar />}>{page}</PracticeLayout>
}
export default Person
