import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import { Suspense } from "react"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import Sppinner from "components/general/Sppinner"
import FetchPersonB from "components/practice/reactquery/FetchPersonB"

const Person = () => {
  return (
    <>
      <PracticeTitle>Get PersonData from Person Cache</PracticeTitle>
      <Suspense fallback={<Sppinner />}>
        <FetchPersonB />
      </Suspense>
    </>
  )
}

Person.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)

export default Person
