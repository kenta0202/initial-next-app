import { TTag } from "interface/todo/tasks"
import { UseQueryResult } from "react-query"
import { useQuery } from "react-query/types/reactjs/useQuery"
import { getTags } from "util/func/promise/internal-api/Tag/getTags"

export const useQueryTags = () => {
  const { status, error, data }: UseQueryResult<TTag[] /* dataの型 */, Error /* errorの型 */> =
    useQuery<TTag[], Error>(["tasks"], getTags, {
      staleTime: 60000,
    })
  return { status, error, data }
}
