import { useQuery, UseQueryResult } from "react-query"
import { TTask } from "interface/todo/tasks"
import { getTasks } from "util/func/promise/internal-api/Task/getTasks"

export const useQueryTasks = () => {
  const { status, error, data }: UseQueryResult<TTask[] /* dataの型 */, Error /* errorの型 */> =
    useQuery<TTask[], Error>(["tasks"], getTasks, {
      // staleTime: 0,
      staleTime: Infinity,
    })
  return { status, error, data }
}
