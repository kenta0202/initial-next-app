/* eslint-disable @typescript-eslint/ban-types */
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"

export type GetLayout = (
  page: ReactElement /* 純粋な React コンポーネントを意味する */
) => ReactNode

// Nextページの型
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // pageを引数にしてReactNodeを返すプロパティを持つ
  getLayout: GetLayout
}

// _Appの型
export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout
}
