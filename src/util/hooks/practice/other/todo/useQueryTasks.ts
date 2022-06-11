import { useQuery, UseQueryResult } from "react-query"
import { TTask } from "interface/todo/tasks"
import { getTasks } from "util/func/promise/internal-api/Task/getTasks"

export const useQueryTasks = () => {
  const { status, error, data }: UseQueryResult<TTask[] /* dataの型 */, Error /* errorの型 */> =
    useQuery<TTask[], Error>(["tasks"], getTasks, {
      // エンドポイントごとにキャッシュのチューニングができる
      // staleTime: 0,
      // staleTime: Infinity,/*➀ キャッシュは常にフレッシュ フェッチは最初の一回だけ 他のユーザーの変更がリアルタイムで更新されない*/,
      // cacheTime: 10000,/* デフォルトは5分 */
      /* ➁他のユーザーの変更がリアルタイムで更新される */
      staleTime: 0,
      refetchOnWindowFocus: true,
    })
  return { status, error, data }
}
