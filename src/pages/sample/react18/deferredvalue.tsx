/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios, { AxiosResponse } from "axios"
import React18Layout from "components/general/layout/practice/React18Layout"
import { useEffect, useDeferredValue, useState } from "react"

interface RootObject {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const Concurrent = () => {
  const [photo, setPhotos] = useState<RootObject>()
  const [input, setInput] = useState("1")
  const deferredWord = useDeferredValue(input)
  /*
 入力する値がテキストのレンダリングを待つ→ほぼ同時
  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<RootObject> = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${deferredWord /* input */}`
        )
        setPhotos(res.data)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.log(error.message)
        }
      }
    }
    void fetchData()
  }, [input])

  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value) /* input */
  }

  return (
    <div className="flex flex-col items-center text-gray-600">
      <p className={`my-3 text-xl font-bold `}>startTransition(concurrent feature)</p>
      <input
        type="number"
        className=" py-1 px-3 mb-5 text-xs rounded border border-gray-100"
        // value={searchKey}
        // 重たい処理に妨害されてstateの更新が遅くなってしまう
        value={input}
        onChange={updateHandler}
      />
      <p className="mb-2 text-xs" key={photo?.id}>
        {photo?.title}
      </p>
    </div>
  )
}

Concurrent.getLayout = function getLayout(page) {
  return <React18Layout>{page}</React18Layout>
}

export default Concurrent
