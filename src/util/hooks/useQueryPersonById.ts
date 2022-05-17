/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useRouter } from "next/router"
import { useQuery, UseQueryResult } from "react-query"

type IPerson = {
  id: string
  name: string
  age: number
}

// Promiseを返す関数
const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
  if (typeof id === "string") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/person/${id}`)
    if (res.ok) {
      return res.json()
    }
    throw new Error("error fetchig user with id")
  }
  throw new Error("invaild id")
  /* ここで吐き出したエラーをErrorBoundaryで受け取る
  react-queryはerrorをthrowする必要がある
  */
}

export const useQueryPersonById = () => {
  const {
    query: { id },
  } = useRouter()

  return useQuery<IPerson, Error>(["person", id], () => getPersonById(id), {
    enabled: !!id /* falseに設定(依存クエリ) */,
    /*
    true(Default):
    false：自動的なrefetchを禁止。
    */
    cacheTime: 2000,
    /*
    /がキャッシュされている→/をキャッシュから取得し、/33を新しく取得
    キャッシュがなくなったら/は消える
    /がキャッシュしていない→/33だけ新しく取得
    */
    staleTime: 5000 /* 5秒後にstale*/,
  })
}
