// 型
import { TTag } from "interface/todo/tasks"
// redux
import { useAppDispatch } from "app/hooks"
import { resetEditedTag } from "features/todoSlice"
// react query
import { useQueryClient, useMutation } from "react-query"
// promise関数
import { putTag } from "util/func/promise/internal-api/Tag/putTag"
import { deleteTag } from "util/func/promise/internal-api/Tag/deleteTag"
import { createTag } from "util/func/promise/internal-api/Tag/createTag"

export const useMutateTag = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const createTagMutation = useMutation(createTag, {
    onSuccess: (res /* 結果が返る */) => {
      const previousTags = queryClient.getQueryData<TTag[]>(["tags"])
      if (previousTags) {
        queryClient.setQueryData<TTag[]>(
          ["tags"],
          [...previousTags, res.data /* TTag[]型 */].flat()
        )
      }
      dispatch(resetEditedTag())
    },
  })
  const updateTagMutation = useMutation(putTag, {
    onSuccess: (res, variables /* POSTされたデータ */) => {
      const previousTags = queryClient.getQueryData<TTag[]>(["tags"])
      console.log(previousTags, "previousTodos")
      console.log(res.data)
      console.log(variables)

      if (previousTags) {
        queryClient.setQueryData<TTag[]>(
          ["tags"],
          previousTags.map((tag) => (tag.id === variables.id ? res.data : tag))
        )
      }
      dispatch(resetEditedTag())
    },
  })
  const deleteTagMutation = useMutation(deleteTag, {
    onSuccess: (res, variables /* deleteTagの引数 */) => {
      const previousTags = queryClient.getQueryData<TTag[]>(["tags"])
      console.log(res.data)
      console.log(variables)

      if (previousTags) {
        queryClient.setQueryData<TTag[]>(
          ["tags"],
          previousTags.filter((tag) => tag.id !== variables)
        )
      }
      dispatch(resetEditedTag())
    },
  })
  return { deleteTagMutation, createTagMutation, updateTagMutation }
}
