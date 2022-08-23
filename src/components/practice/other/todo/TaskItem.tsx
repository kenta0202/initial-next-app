// React
import { memo } from "react"
// Icons
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid"
// 型
import { TTask } from "interface/todo/tasks"
// Redux
import { useAppDispatch } from "app/hooks"
// Action
import { setEditedTag, setEditedTask } from "features/todoSlice"
// MutationHooks
import { useMutateTask } from "util/hooks/practice/other/todo/useMutateTask"

interface Props {
  task: TTask
}

// taskを受け取って、
const TaskItem = ({ task }: Props) => {
  const dispatch = useAppDispatch()

  //   MutationResult
  const { deleteTaskMutation } = useMutateTask()

  console.log("rendered TaskItem")
  if (deleteTaskMutation.isLoading) {
    return <p>Deleting...</p>
  }
  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <span>
        {" : "}
        {task.tag_name}
      </span>

      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="mx-1 w-5 h-5 text-blue-500 cursor-pointer"
          //
          onClick={() => {
            dispatch(
              setEditedTask({
                id: task.id,
                title: task.title,
                tag_name: task.tag_name,
              })
            )
            dispatch(
              setEditedTag({
                id: task.id,
                tag_name: task.tag_name,
              })
            )
          }}
        />
        {/* DELETE /api/tasks/[id]  */}
        <TrashIcon
          className="w-5 h-5 text-blue-500 cursor-pointer"
          onClick={() => {
            //   deleteMutation.mutateの引数はdeleteMutationの第一引数のPromise関数の引数と同じ
            deleteTaskMutation.mutate(task.id)
          }}
        />
      </div>
    </li>
  )
}
export const TaskItemMemo = memo(TaskItem)
