import { useQuery } from "react-query"
import { getComments } from "util/func/promise/external-api/getComments"

interface RootObject {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const useQueryComments = () => {
  return useQuery<RootObject[], Error>({
    queryKey: ["comments"],
    queryFn: getComments /* Promiseでデータを返す関数 */,
    // キャッシュされたデータは常に最新とみなす→ページ遷移するたびにFetchしない
    staleTime: Infinity,
    /*
 まずはPromiseをthrowさせる。→Suspeseで待ち受けてfallback
  Promiseが解決→データを返す→埋め込んだコンポーネントを返す
　　*/
  })
}
