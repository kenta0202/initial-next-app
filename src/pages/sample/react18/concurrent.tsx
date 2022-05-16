/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios, { AxiosResponse } from "axios"
import React18Layout from "components/general/layout/practice/React18Layout"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import { useState, useEffect, useTransition } from "react"

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
  const [isPending, startTransition] = useTransition()

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
    /* 緊急性がない */
    startTransition(() => setSearchKey(e.target.value)) /* searchKey */
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
        // 重たい処理に妨害されてstateの更新が遅くなってしまう
        value={input}
        onChange={updateHandler}
      />
      {filteredPhotos.map((photo) => (
        <p className="mb-2 text-xs" key={photo.id}>
          {photo.title}
        </p>
      ))}
    </div>
  )
}

Concurrent.getLayout = function getLayout(page) {
  return <React18Layout>{page}</React18Layout>
}

export default Concurrent
