/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios, { AxiosResponse } from "axios"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import { useState, useEffect, useTransition } from "react"
import NavBar from "components/practice/NavBar"

/*
●Description
・isPendingの間は、Loading...を出さないで
以前のものを灰色にスタイリングするなどでそのまま表示
・Urgent state updateとNot urgent state updateを分けて遅延非同期処理
*/
/*
●Try
Input要素が value={searchKey}(緊急性がない) value={input}(緊急性がある)場合で
・errorを入力
・errorを一括削除
*/

interface RootObject {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const Concurrent = () => {
  const [photos, setPhotos] = useState<RootObject[]>([])
  const [input, setInput] = useState("") /* Urgent state update */
  const [searchKey, setSearchKey] = useState("") /* Not urgent state update */
  const [isPending /* 遅延中かどうか */, startTransition] = useTransition()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<RootObject[]> = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        )
        setPhotos(res.data)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.log(error.message)
        }
      }
    }
    void fetchData()
  }, [])

  const filteredPhotos = photos.filter((photo) => {
    return photo.title.includes(searchKey)
  })

  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* 緊急性がある */
    setInput(e.target.value) /* input */
    /*
    緊急性がない
    遅延の対象 現在の画面を表示し続けている
    */
    startTransition(() => setSearchKey(e.target.value)) /* searchKey */
    // setSearchKey(e.target.value)
  }

  return (
    <div className="flex flex-col items-center text-gray-600">
      <p className={`my-3 text-xl font-bold ${isPending ? "text-pink-500" : "text-blue-500"}`}>
        startTransition(concurrent feature)
      </p>
      <input
        type="text"
        className=" py-1 px-3 mb-5 text-xs rounded border border-gray-100"
        // value={searchKey}
        // ↑だと重たい処理に妨害されてinput要素のstateの更新が遅くなってしまう
        value={input}
        onChange={updateHandler}
      />
      {filteredPhotos.map((photo) => (
        <p className={`mb-2 text-xs ${isPending && "opacity-60"}`} key={photo.id}>
          {photo.title}
        </p>
      ))}
    </div>
  )
}

Concurrent.getLayout = function getLayout(page) {
  return <PracticeLayout NavBarElement={<NavBar sampleName={"React18"} />}>{page}</PracticeLayout>
}

export default Concurrent
