import "../styles/dist.css"
import "../styles/normalize.css"
import "../styles/global.css"

import React, { Profiler } from "react"
import HeadInformation from "components/general/HeadInformation"
import { Provider } from "react-redux"
import { store } from "app/store"
import profileRender from "util/profiler-render"

// import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { NextWebVitalsMetric } from "next/app"

// WebVitalの計測
// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   switch (metric.name) {
//     case "FCP":
//       console.log(`FCP: ${Math.round(metric.value * 10) / 10}`)
//       break
//     case "LCP":
//       console.log(`LCP: ${Math.round(metric.value * 10) / 10}`)
//       break
//     case "TTFB":
//       console.log(`TTFB: ${Math.round(metric.value * 10) / 10}`)
//       break
//     case "Next.js-hydration":
//       console.log(
//         `Hydration: ${Math.round(metric.startTime * 10) / 10} -> ${
//           Math.round((metric.startTime + metric.value) * 10) / 10
//           // 終了時間を出力
//         }`
//       )
//       break
//     default:
//       break
//   }
// }

// queryClientの設定
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false /* 失敗したときのRetryをfalse */,
      /* デフォルトは3回 */
      refetchOnWindowFocus: false,
      /* フォーカスしたときやタブを切り替えた時の自動フェッチ→false デフォルトはtrue */
      suspense: true,
      /*
      suspenceはデフォルトでfalse
      suspence:trueだとuseErrorBoundary: trueになる
      */
      cacheTime: 5000,
      /* GCの機能:cacheTimeはデフォルトで5分 5分を超えると自動的に削除*/
      // keepPreviousData: false,
      /*
      true:新しいデータの取得ができるまで以前のデータを使う
      false(デフォルト):ページが切り替わる度にローディングが発生
    */
    },
  },
})

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  // Q: AppProps型がつくとgetLayoutがはじかれる
  return (
    <>
      <HeadInformation />
      {/* <Profiler id="user" onRender={profileRender}> */}
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </Provider>
      {/* </Profiler> */}
    </>
  )
}

export default MyApp
