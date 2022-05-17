import { ExclamationCircleIcon } from "@heroicons/react/solid"
import CSR from "components/general/CSR"
import React18Layout from "components/general/layout/practice/React18Layout"
import Sppinner from "components/general/Sppinner"
import FetchComments from "components/practice/react18/FetchComments"
import FetchTasks from "components/practice/react18/FetchTasks"
import FetchUsers from "components/practice/react18/FetchUsers"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

/*
●Suspense
レンダリングと同時にFetchingも行うのでできるだけ早く次の画面を表示する。
データのロードが間に合わない場合は進行状態で
あることを表現するプレースホルダーの UI を代わりに出す
*/
const SuspenseDemo = () => {
  return (
    <CSR>
      <p className="mb-3 text-xl font-bold text-blue-500">Suspense Demo</p>
      <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>
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

SuspenseDemo.getLayout = function getLayout(page) {
  return <React18Layout>{page}</React18Layout>
}

export default SuspenseDemo
