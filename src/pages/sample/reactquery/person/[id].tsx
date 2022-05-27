import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchPersonById from "components/practice/reactquery/FetchPersonById"
import { Suspense } from "react"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import Sppinner from "components/general/Sppinner"

const PersonIdPage = () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

  return (
    <>
      <PracticeTitle>Get PersonData</PracticeTitle>
      <Suspense fallback={<Sppinner />}>
        <FetchPersonById />
      </Suspense>
    </>
  )
}

PersonIdPage.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)

export default PersonIdPage
