import axios from "axios"

export const deleteTag = (id: string) =>
  axios.delete(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks/${id}`)
