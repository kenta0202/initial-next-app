import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchPerson from "components/practice/reactquery/FetchPerson"
import { Suspense } from "react"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"

const Person = () => {
  return (
    <>
      <PracticeTitle>Get PersonData</PracticeTitle>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchPerson />
      </Suspense>
    </>
  )
}

Person.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)

export default Person
