import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import ReactQueryNavBar from "components/general/layout/practice/navbar/ReactQueryNavBar"
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
  return <PracticeLayout sampleElement={<ReactQueryNavBar />}>{page}</PracticeLayout>
}

export default PageNation
