import axios from "axios"
import { TTag } from "interface/todo/tasks"

export const createTag = (tag: TTag) =>
  axios.post<TTag>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tags/`, tag)
