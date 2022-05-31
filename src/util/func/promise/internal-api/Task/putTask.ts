import axios from "axios"
import { TEditTask, TTask } from "interface/todo/tasks"

// Taskの更新
// 編集中のTaskを引数にする
export const putTask = (task: TEditTask) =>
  axios.post<TTask>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks/${task.id}/`, task)
