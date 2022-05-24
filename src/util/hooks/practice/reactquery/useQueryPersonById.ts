/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { getPersonById } from "util/func/promise/internal-api/getPersonById"

type IPerson = {
  id: string
  name: string
  age: number
}

export const useQueryPersonById = () => {
  const {
    query: { id },
  } = useRouter()

  return useQuery<IPerson, Error>(["person", id], () => getPersonById(id), {
    enabled: !!id /* falseに設定(依存クエリ) */,
    /*
    id が存在する場合にのみ API を叩く
    ↑をすることで動的に処理をする
    true→fetcher関数が実行
    false→自動的なrefetchを禁止。
    これがないとページの読み込み中やレンダリング中にcallしてしまう。
    この段階ではまだidはundefind
    動的ルーティングの場合は、Fetchとレンダリングを同時に走らせないで、レンダリングの後にFetchを走らせる
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
