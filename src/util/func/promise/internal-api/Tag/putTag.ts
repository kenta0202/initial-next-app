import axios from "axios"
import { TTag } from "interface/todo/tasks"

export const putTag = (tag: TTag) =>
  axios.post<TTag>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tags/${tag.id}/`, tag)
