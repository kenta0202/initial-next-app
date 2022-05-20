/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../fetchDelay"

interface RootObject {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getTasks = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(delay(5000))
    const data = responce.data
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.message)
      throw new Error("Network responce not ok")
    }
  }
}