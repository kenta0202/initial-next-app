import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchPersonA from "components/practice/reactquery/FetchPersonA"
import { Suspense } from "react"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import Sppinner from "components/general/Sppinner"

const Person = () => {
  return (
    <>
      <PracticeTitle>Get PersonData from CustomAPIServer</PracticeTitle>
      <Suspense fallback={<Sppinner />}>
        <FetchPersonA />
      </Suspense>
    </>
  )
}

Person.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)

export default Person
