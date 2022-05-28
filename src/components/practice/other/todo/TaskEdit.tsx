// React
import { FC, memo, FormEvent } from "react"

// Redux
import { useAppDispatch, useAppSelector } from "app/hooks"
import { selectTask, setEditedTask } from "features/todoSlice"

//
import { useMutateTask } from "util/hooks/practice/other/todo/useMutateTask"
import { useQueryTags } from "util/hooks/practice/other/todo/useQueryTags"

const TaskEdit: FC = () => {
  const dispatch = useAppDispatch()

  // Global State
  const editedTask = useAppSelector(selectTask)

  // サーバーデータのキャッシュを取得
  const { status, data } = useQueryTags()

  //   MutationResult
  const { createTaskMutation, updateTaskMutation } = useMutateTask()

  //   イベント関数
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    //   リロードを防ぐ
    e.preventDefault()
    //   サーバーサイドへの副作用をもたらす処理を実行
    if (editedTask.id === 0) createTaskMutation.mutate(editedTask)
    else {
      updateTaskMutation.mutate(editedTask)
    }
  }

  //   変数
  const tagOptions = data?.map((tag) => (
    <option key={tag.id} value={tag.id}>
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
          className="py-2 px-3 mb-3 border border-gray-300"
          placeholder="new task ?"
          type="text"
          onChange={(e) => dispatch(setEditedTask({ ...editedTask, title: e.target.value }))}
          value={editedTask.title}
        />
        <button
          className="py-2 px-3 m-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
          disabled={!editedTask.title || !editedTask.tag}
        >
          {editedTask.id === 0 ? "Create" : "Update"}
        </button>
      </form>
      <select
        className="py-2 px-3 mb-3 border border-gray-300"
        value={editedTask.tag}
        onChange={(e) => dispatch(setEditedTask({ ...editedTask, tag: Number(e.target.value) }))}
      >
        <option value={0}>Tag</option>
        {tagOptions}
      </select>
    </div>
  )
}
export const TaskEditMemo = memo(TaskEdit)
