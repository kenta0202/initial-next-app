import ReacQueryLayout from "components/general/layout/practice/ReactQueryLayout"
import FetchPersonById from "components/practice/reactquery/FetchPersonById"
import { Suspense } from "react"

const PersonIdPage = () => {
  console.log(process.env.NEXT_PUBLIC_HOST)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchPersonById />
    </Suspense>
  )
}

PersonIdPage.getLayout = function getLayout(page) {
  return <ReacQueryLayout>{page}</ReacQueryLayout>
}

export default PersonIdPage
