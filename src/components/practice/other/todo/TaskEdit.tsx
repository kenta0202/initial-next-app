// React
import { FC, memo, FormEvent } from "react"
import { uid } from "uid"
// Redux
import { useAppDispatch, useAppSelector } from "app/hooks"
import { selectTag, selectTask, setEditedTag, setEditedTask } from "features/todoSlice"

// MutationHooks
import { useMutateTask } from "util/hooks/practice/other/todo/useMutateTask"

// QueryHooks
import { useQueryTags } from "util/hooks/practice/other/todo/useQueryTags"

const TaskEdit: FC = () => {
  const dispatch = useAppDispatch()

  // Global State 編集中のTask
  const editedTask = useAppSelector(selectTask)
  // Tags
  const editedTag = useAppSelector(selectTag)

  // サーバーデータのキャッシュを取得 タグの一覧
  const { status, data } = useQueryTags()

  //   MutationResult
  const { createTaskMutation, updateTaskMutation } = useMutateTask()

  //   イベント関数
  // サーバーデータのキャッシュを追加して、GlabalStateのEditedTaskを初期化
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    //   リロードを防ぐ
    e.preventDefault()
    //   サーバーサイドへの副作用をもたらす処理を実行
    if (/* GlobalState */ editedTask.id === "0")
      /*
editedTask: {
    id: 0,
    title: "",
    tag: 0,
  },
*/

      /* Create 編集中のタスクがない */
      // 引数の型は, id,title,tag_name,
      createTaskMutation.mutate({ ...editedTask, ...editedTag, id: uid() })
    else {
      /* Update */
      // 引数の型は, id,title,tag_name,
      updateTaskMutation.mutate({ ...editedTask, ...editedTag })
    }
  }

  //   変数 option要素
  const tagOptions = /* サーバーデータのキャッシュ */ data?.map((tag) => (
    <option key={tag.id} value={tag.tag_name}>
      {tag.tag_name}
    </option>
  ))
  console.log("rendered TaskEdit")
  if (status === "loading") return <div>{"Loading..."}</div>
  if (status === "error") return <div>{"Error"}</div>
  if (updateTaskMutation.isLoading) {
    return <span>Updating...</span>
  }
  if (createTaskMutation.isLoading) {
    return <span>Creating...</span>
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="py-2 px-3 mb-3 text-darkgrey border border-gray-300"
          placeholder="new task ?"
          type="text"
          onChange={(e) => dispatch(setEditedTask({ ...editedTask, title: e.target.value }))}
          value={editedTask.title}
        />
        <button
          className="py-2 px-3 m-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
          disabled={!editedTask.title || !editedTask.id}
          // 両方とも空のとき
          // Q: よくわからん
        >
          {editedTask.id === "0" ? "Create" : "Update"}
          {/* 編集中のタスクがあるかないか */}
        </button>
      </form>

      {/* GlobalStateのEditedTaskを更新 */}
      <select
        className="py-2 px-3 mb-3 text-darkgrey border border-gray-300"
        value={editedTask.tag_name}
        onChange={(e) => {
          dispatch(setEditedTask({ ...editedTask, tag_name: e.target.value }))
          dispatch(
            setEditedTag({
              id: editedTask.id,
              tag_name: e.target.value,
            })
          )
        }}
      >
        <option value={0}>Tag</option>
        {tagOptions}
      </select>
    </div>
  )
}
export const TaskEditMemo = memo(TaskEdit)
