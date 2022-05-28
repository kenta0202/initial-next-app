/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
// 型
import { TTask } from "interface/todo/tasks"
// redux
import { useAppDispatch } from "app/hooks"
import { resetEditedTask } from "features/todoSlice"
// react query
import { useMutation, useQueryClient } from "react-query"
// Promise関数
import { createTask } from "util/func/promise/internal-api/Task/createTask"
import { putTask } from "util/func/promise/internal-api/Task/putTask"
import { deleteTask } from "util/func/promise/internal-api/Task/deleteTask"

export const useMutateTask = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const createTaskMutation = useMutation(createTask, {
    onSuccess: (res /* 結果が返る */) => {
      const previousTodos = queryClient.getQueryData<TTask[]>(["tasks"])
      if (previousTodos) {
        //   キャッシュの書き換え
        queryClient.setQueryData<TTask[]>(["tasks"], [...previousTodos, res.data])
      }
      dispatch(resetEditedTask())
    },
  })
  const updateTaskMutation = useMutation(putTask, {
    onSuccess: (res, variables /* taskオブジェクトのデータ */) => {
      const previousTodos = queryClient.getQueryData<TTask[]>(["tasks"])
      if (previousTodos) {
        queryClient.setQueryData<TTask[]>(
          ["tasks"],
          previousTodos.map((task) => (task.id === variables.id ? res.data : task))
        )
      }
      dispatch(resetEditedTask())
    },
  })
  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: (res, variables) => {
      const previousTodos = queryClient.getQueryData<TTask[]>(["tasks"])
      console.log(previousTodos)
      if (previousTodos) {
        queryClient.setQueryData<TTask[]>(
          ["tasks"],
          previousTodos.filter((task) => task.id !== variables)
        )
      }
      dispatch(resetEditedTask())
    },
  })
  return { deleteTaskMutation, createTaskMutation, updateTaskMutation }
}
