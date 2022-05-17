import ReacQueryLayout from "components/general/layout/practice/ReactQueryLayout"
import Sppinner from "components/general/Sppinner"
import FetchPageNation from "components/practice/reactquery/FetchPageNation"
import { Suspense } from "react"

const PageNation = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Sppinner />
          </div>
        }
      >
        <FetchPageNation />
      </Suspense>
    </>
  )
}

PageNation.getLayout = function getLayout(page) {
  return <ReacQueryLayout>{page}</ReacQueryLayout>
}

export default PageNation
