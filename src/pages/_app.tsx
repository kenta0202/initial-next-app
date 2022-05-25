import "../styles/dist.css"
import "../styles/normalize.css"
import "../styles/global.css"

// モジュール系
import React, { Profiler } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

// ファイル系
import HeadInformation from "components/general/HeadInformation"
import { store } from "app/store"

// 計測系
import profileRender from "util/profiler-render"
import { NextWebVitalsMetric } from "next/app"
import { AppPropsWithLayout } from "interface/general"

/*
すべてのページにおいて、ページを初期化するために App コンポーネント
ページ移動間の固定レイアウト,状態管理ライブラリとの結合,広告まわりの関数の実行や、NProgress などのローディングを設定
肥大化に注意
*/

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

// queryClientの設定 Topレベルではnewする。下の階層ではuseQueryClient()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false /* 失敗したときのRetryをfalse */,
      /* デフォルトは3回 */
      refetchOnWindowFocus: false,
      /* フォーカスしたときやタブを切り替えた時の自動フェッチ→false デフォルトはtrue 過剰なFetchを防ぐ*/
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

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <HeadInformation />
      {/* <Profiler id="user" onRender={profileRender}> */}
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ReduxProvider>
      {/* </Profiler> */}
    </>
  )
}

export default MyApp
