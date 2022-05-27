import { FC, memo } from "react"

import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid"
import { TTask } from "interface/todo/tasks"
import { useMutateTask } from "util/hooks/practice/other/todo/useMutateTask"
import { setEditedTask } from "features/todoSlice"
import { useAppDispatch } from "app/hooks"

interface Props {
  task: TTask
}

// taskを受け取って、
const TaskItem: FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch()
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
          onClick={() => {
            dispatch(
              setEditedTask({
                id: task.id,
                title: task.title,
                tag: task.tag,
              })
            )
          }}
        />
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
