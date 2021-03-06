import axios from "axios"
import { TEditTask, TTask } from "interface/todo/tasks"

// idはPostしないのでOmitで除外
// 引数の型は
export const createTask = (task: TEditTask) =>
  axios.post<TTask[]>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks/`, task)
