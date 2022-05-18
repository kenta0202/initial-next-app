import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReactQueryNavBar from "components/general/layout/practice/navbar/ReactQueryNavBar"
import FetchPersonById from "components/practice/reactquery/FetchPersonById"
import { Suspense } from "react"

const PersonIdPage = () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchPersonById />
    </Suspense>
  )
}

PersonIdPage.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<ReactQueryNavBar />}>{page}</PracticeLayout>
}

export default PersonIdPage
