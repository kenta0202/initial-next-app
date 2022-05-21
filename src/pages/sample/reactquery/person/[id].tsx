import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchPersonById from "components/practice/reactquery/FetchPersonById"
import { Suspense } from "react"
import NavBar from "components/practice/NavBar"

const PersonIdPage = () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchPersonById />
    </Suspense>
  )
}

PersonIdPage.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
)

export default PersonIdPage
