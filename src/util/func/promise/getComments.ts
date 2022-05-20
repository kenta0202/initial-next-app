/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../fetchDelay"

interface RootObject {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

// Promiseを返す関数
export const getComments = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=3")
      .then(delay(1000))
    const data = responce.data
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error("Network responce not ok")
    }
  }
}
