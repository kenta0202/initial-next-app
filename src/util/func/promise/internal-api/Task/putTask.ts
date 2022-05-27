import axios from "axios"
import { TEditTask, TTask } from "interface/todo/tasks"

export const putTask = (task: TEditTask) =>
  axios.put<TTask>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks/${task.id}/`, task)
