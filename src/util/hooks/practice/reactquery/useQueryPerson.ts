import { useQuery, UseQueryResult } from "react-query"
import { getPerson } from "util/func/promise/internal-api/getPerson"

type IPerson = {
  id: string
  name: string
  age: number
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
