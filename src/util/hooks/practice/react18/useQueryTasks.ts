import { useQuery } from "react-query"
import { getTasks } from "util/func/promise/external-api/getTasks"

interface RootObject {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useQueryTasks = () => {
  return useQuery<RootObject[], Error>({
    queryKey: ["task"],
    queryFn: getTasks,
    // キャッシュされたデータは常に最新とみなす→ページ遷移するたびにFetchしない
    staleTime: Infinity,
  })
}
