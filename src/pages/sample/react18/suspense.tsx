import CSR from "components/general/CSR"
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import FetchComments from "components/practice/react18/FetchComments"
import FetchTasks from "components/practice/react18/FetchTasks"
import FetchUsers from "components/practice/react18/FetchUsers"
import { Suspense } from "react"
import NavBar from "components/practice/common/NavBar"
import Sppinner from "components/general/Sppinner"
import PracticeTitle from "components/practice/common/PracticeTitle"

/*
●Suspense
レンダリングと同時にFetchingも行うのでできるだけ早く次の画面を表示する。
データのロードが間に合わない場合は進行状態で
あることを表現するプレースホルダーの UI を代わりに出す
*/
const SuspenseDemo = () => {
  return (
    <CSR>
      <PracticeTitle>Suspense</PracticeTitle>
      <LayoutErrorBoundary>
        <Suspense fallback={<Sppinner />}>
          <FetchUsers />
        </Suspense>
      </LayoutErrorBoundary>
      <LayoutErrorBoundary>
        <Suspense fallback={<Sppinner />}>
          <FetchTasks />
        </Suspense>
      </LayoutErrorBoundary>
      <LayoutErrorBoundary>
        <Suspense fallback={<Sppinner />}>
          <FetchComments />
        </Suspense>
      </LayoutErrorBoundary>
      {/* <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchUsers />
          <FetchTasks />
          <FetchComments />
        </Suspense>
      </ErrorBoundary> */}
    </CSR>
  )
}

SuspenseDemo.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"React18"} />}>{page}</PracticeLayout>
)

export default SuspenseDemo
