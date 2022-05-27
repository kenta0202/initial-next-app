import axios from "axios"
import { TEditTask, TTask } from "interface/todo/tasks"

// idはPostしないのでOmitで除外
export const createTask = (task: Omit<TEditTask, "id">) =>
  axios.post<TTask>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks/`, task)
