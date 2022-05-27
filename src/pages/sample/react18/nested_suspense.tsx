import CSR from "components/general/CSR"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchTasks from "components/practice/react18/FetchTasks"
import FetchUsers from "components/practice/react18/FetchUsers"
import { Suspense } from "react"
import NavBar from "components/practice/common/NavBar"
import Sppinner from "components/general/Sppinner"
import PracticeTitle from "components/practice/common/PracticeTitle"

const NestedSuspense = () => {
  return (
    <CSR>
      <PracticeTitle>Nested Suspense</PracticeTitle>
      <Suspense
        fallback={
          /* 3秒 */

          <>
            <p className="my-5 text-green-500 ">Showing outer skelton...</p>
            <Sppinner />
          </>
        }
      >
        <FetchUsers />
        <Suspense
          fallback={
            /* 5-3=2秒 */
            <>
              <p className="my-5 text-pink-500 ">Showing inner skelton...</p>
              <Sppinner />
            </>
          }
        >
          <FetchTasks />
        </Suspense>
      </Suspense>
    </CSR>
  )
}

NestedSuspense.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"React18"} />}>{page}</PracticeLayout>
)

export default NestedSuspense
