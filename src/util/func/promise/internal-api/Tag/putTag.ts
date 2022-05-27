import axios from "axios"
import { TTag } from "interface/todo/tasks"

export const putTag = (tag: TTag) =>
  axios.put<TTag>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/tags/${tag.id}/`, tag)
