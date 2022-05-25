// delayをしているからresの型が分からない
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../../fetchDelay"

interface RootObject {
  userId: number
  id: number
  title: string
  completed: boolean
}

// データを返すPromise関数
export const getTasks = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(delay(5000))

    return responce.data
  } catch (err: unknown) {
    // if (err instanceof Error) {
    //   throw err
    // }
    if (axios.isAxiosError(err)) {
      throw new Error(err.message)
      /* LayoutErrorBoundaryがエラーを受け取る */
    }
    throw err /* 意図していない例外 */
  }
}
