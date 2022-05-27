import axios from "axios"

export const deleteTag = (id: number) =>
  axios.delete(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/${id}`)
