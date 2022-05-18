import { useQuery, UseQueryResult } from "react-query"

type IPerson = {
  id: string
  name: string
  age: number
}

// Promiseを返す関数
const getPerson = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person`)
  if (res.ok) {
    return res.json()
  }
  throw new Error("Network responce not ok")
  /* ここで吐き出したエラーをErrorBoundaryで受け取る
  react-queryはerrorをthrowする必要がある
  */
}

export const useQueryPerson = () => {
  const { status, error, data }: UseQueryResult<IPerson /* dataの型 */, Error /* errorの型 */> =
    useQuery<IPerson, Error>(["person"], () => getPerson(), {
      staleTime: 5000 /* 5秒後にStale */,
      refetchOnWindowFocus:
        true /* フォーカスしたときやタブを切り替えた時の自動フェッチ  デフォルトはtrue */,
    })
  return { status, error, data }
}
