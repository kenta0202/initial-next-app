import { TTag } from "interface/todo/tasks"
import { useQuery, UseQueryResult } from "react-query"
import { getTags } from "util/func/promise/internal-api/Tag/getTags"

export const useQueryTags = () => {
  const { status, error, data }: UseQueryResult<TTag[] /* dataの型 */, Error /* errorの型 */> =
    useQuery<TTag[], Error>(["tags"], getTags, {
      staleTime: 60000 /* 60秒後に再レンダリング */,
    })
  return { status, error, data }
}
