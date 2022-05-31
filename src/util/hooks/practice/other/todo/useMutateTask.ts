// 型
import { TTask } from "interface/todo/tasks"
// redux
import { useAppDispatch } from "app/hooks"
import { resetEditedTag, resetEditedTask } from "features/todoSlice"
// react query
import { useMutation, useQueryClient } from "react-query"
// Promise関数
import { createTask } from "util/func/promise/internal-api/Task/createTask"
import { putTask } from "util/func/promise/internal-api/Task/putTask"
import { deleteTask } from "util/func/promise/internal-api/Task/deleteTask"

export const useMutateTask = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  // Mutation関数
  // サーバーデータ["tasks"]のキャッシュの書き換えとGlobal変数EditedTaskの初期化

  const createTaskMutation = useMutation(createTask, {
    onSuccess: (res /* 結果が返る */) => {
      const previousTodos = queryClient.getQueryData<TTask[]>(["tasks"])
      if (previousTodos) {
        //   キャッシュの追加
        queryClient.setQueryData<TTask[]>(["tasks"], [...previousTodos, ...res.data])
        console.log(res.data)
      }
      dispatch(resetEditedTask())
      dispatch(resetEditedTag())
    },
  })
  const updateTaskMutation = useMutation(putTask, {
    onSuccess: (res, variables /* taskオブジェクトのデータ */) => {
      const previousTodos = queryClient.getQueryData<TTask[]>(["tasks"])
      console.log(previousTodos, "previousTodos")
      console.log(variables)
      if (previousTodos) {
        queryClient.setQueryData<TTask[]>(
          ["tasks"],
          // キャッシュの変更
          previousTodos.map((task) => (task.id === variables.id ? res.data : task))
        )
      }
      dispatch(resetEditedTask())
      dispatch(resetEditedTag())
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
