import { useState } from "react"
import { useQuery, UseQueryResult } from "react-query"
import { getProjects } from "util/func/promise/getProjects"

type Post = {
  usedId: number
  id: string
  title: string
  body: string
}

export const useQueryPage = () => {
  const [page, setPage] = useState(1)

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  }: UseQueryResult<Post[], Error> = useQuery<Post[], Error>(
    ["projects", page],
    () => getProjects(page),
    { keepPreviousData: true }
    /*
    keepPreviousData
    true:新しいデータの取得ができるまで以前のデータを使う
    false(デフォルト):ページが切り替わる度にローディングが発生
    */
  )
  return { page, setPage, isLoading, isError, error, data, isFetching, isPreviousData }
}
