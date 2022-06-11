import { TTag } from "interface/todo/tasks"
import { useQuery, UseQueryResult } from "react-query"
import { getTags } from "util/func/promise/internal-api/Tag/getTags"

export const useQueryTags = () => {
  const { status, error, data }: UseQueryResult<TTag[] /* dataの型 */, Error /* errorの型 */> =
    useQuery<TTag[], Error>(["tags"], getTags, {
      // staleTime: 60000 /* 60秒後に再レンダリング */,
      staleTime:
        Infinity /*➀ キャッシュは常にフレッシュ フェッチは最初の一回だけ 他のユーザーの変更がリアルタイムで更新されない*/,
      // cacheTimeはデフォルト5分
    })
  return { status, error, data }
}
