import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"

// 空のオブジェクトの型
type EmptyObject = Record<string, unknown>

/*
any型 何でも
↓
{}型 nullとundefined以外を許容
↓
unknown型 any型のタイプセーフ対応版
任意の値を代入できる点はany型と同じ
型アサーション等が無いと利用できない
*/

// Page型のプロパティのgetLayout関数の型
export type GetLayout = (
  page: ReactElement /* 純粋な React コンポーネントを意味する */
) => ReactNode

// Nextページの型
export type NextPageWithLayout<P = EmptyObject, IP = P> = NextPage<P, IP> & {
  // pageを引数にしてReactNodeを返すプロパティを持つ
  getLayout: GetLayout
}

// _Appの引数のComponentとPropsの型
export type AppPropsWithLayout<P = EmptyObject> = AppProps<P> & {
  Component: NextPageWithLayout
}

// React.memoコンポーネントの型
export type NamedExoticComponentMemo<P = EmptyObject> = React.NamedExoticComponent<P> & {
  getLayout: GetLayout
}

// CustomAPIサーバーがエラーを返す場合の型
export type TApiResponceError = {
  statusCode: number
  message: string
}

// Propsの型
export type OnlyChildrenProps = {
  children: React.ReactNode
}
