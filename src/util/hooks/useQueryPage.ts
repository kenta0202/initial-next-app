/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import { delay } from "util/func/fetchDelay"

type Post = {
  usedId: number
  id: string
  title: string
  body: string
}

// Promiseを返す関数
const fetchProjects = async (page = 1) => {
  try {
    const responce: AxiosResponse<Post[]> = await axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(delay(1000))

    const data = responce.data
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.message)
    }
  }
}

export const useQueryPage = () => {
  const [page, setPage] = useState(1)

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<Post[], Error>(
    ["projects", page],
    () => fetchProjects(page),
    { keepPreviousData: true }
    /*
    keepPreviousData
    true:新しいデータの取得ができるまで以前のデータを使う
    false(デフォルト):ページが切り替わる度にローディングが発生
    */
  )
  return { page, setPage, isLoading, isError, error, data, isFetching, isPreviousData }
}
