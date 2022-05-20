import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import Sppinner from "components/general/Sppinner"
import FetchPageNation from "components/practice/reactquery/FetchPageNation"
import { Suspense } from "react"
import NavBar from "components/practice/NavBar"

const PageNation = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
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
  return (
    <PracticeLayout NavBarElement={<NavBar sampleName={"ReactQuery"} />}>{page}</PracticeLayout>
  )
}

export default PageNation
