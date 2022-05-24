// delayをしているからresの型が分からない
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../../fetchDelay"

type Post = {
  usedId: number
  id: string
  title: string
  body: string
}

export const getProjects = async (page = 1) => {
  try {
    const responce: AxiosResponse<Post[]> = await axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(delay(1000))
    return responce.data
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err
    }
    throw err /* 意図していない例外 */
  }
}
