// delayをしているからresの型が分からない
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../../fetchDelay"

interface RootObject {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

// Promiseを返す関数
export const getComments = async (): Promise<RootObject[]> => {
  try {
    const res: AxiosResponse<RootObject[], string> = await axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=3")
      .then(delay(1000))
    // if (!res.data) {
    //   throw new Error(`${res.status}`)
    // }
    return res.data
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.message)
      /* LayoutErrorBoundaryがエラーを受け取る */
    }
    throw err /* 意図していない例外 */
  }
}
