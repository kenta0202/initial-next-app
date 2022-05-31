import axios from "axios"
import { TTask } from "interface/todo/tasks"

export const deleteTask = (id: string) =>
  axios.delete<TTask>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks/${id}/`)
