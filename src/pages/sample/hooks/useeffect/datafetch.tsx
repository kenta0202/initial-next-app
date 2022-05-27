/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"

interface RootObject {
  hits: Hit[]
  nbHits: number
  page: number
  nbPages: number
  hitsPerPage: number
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  query: string
  params: string
  processingTimeMS: number
}

export type ItemType = {
  title: string
  author: string
}
export interface Hit {
  created_at: string
  title: string
  url: string
  author: string
  points: number
  story_text?: any
  comment_text?: any
  num_comments: number
  story_id?: any
  story_title?: any
  story_url?: any
  parent_id?: any
  created_at_i: number
  relevancy_score?: number
  _tags: string[]
  objectID: string
  _highlightResult: HighlightResult
}

interface HighlightResult {
  title: Title
  url: Url
  author: Author
}

interface Author {
  value: string
  matchLevel: string
  matchedWords: any[]
}

interface Url {
  value: string
  matchLevel: string
  matchedWords: string[]
  fullyHighlighted?: boolean
}

interface Title {
  value: string
  matchLevel: string
  fullyHighlighted: boolean
  matchedWords: string[]
}

const DataFetch = () => {
  // API から取得したデータ
  const [items, setItems] = useState<ItemType[]>([])
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false)
  // input（入力欄）に入力した値
  const [inputValue, setInputValue] = useState("React")
  // 外部 API にリクエスト時に付与するクエリパラメータ
  const [query, setQuery] = useState(inputValue)
  // データの表示非表示
  const [isDisplay, setIsDisplay] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        console.error("データがありません。")
        throw new Error("データがありません")
      }
      setIsLoading(true)
      try {
        const result: AxiosResponse<RootObject> = await axios(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        )
        const data: ItemType[] = result.data.hits.map((data: Hit) => {
          return { title: data.title, author: data.author }
        })
        console.log(data.length)
        setItems(data)
        setInputValue("")
        console.log(data)
        setIsLoading(false)
      } catch (error: unknown) {
        // エラーオブジェクトerrorを型ガード
        if (axios.isAxiosError(error)) {
          console.log("400 Error!!")
          console.log(error.message)
        }
      }
    }
    void fetchData()
  }, [query])

  return (
    <>
      <PracticeTitle>データリスト (useEffect)</PracticeTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setQuery(inputValue)
        }}
        className=" space-x-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" className="py-1 px-2 rounded-full border-[1px]">
          検索
        </button>
      </form>
      <div className=" flex flex-col gap-2 justify-center items-center ">
        <p className={`${isDisplay ? "text-blue-400" : "text-pink-400"} text-xl`}>
          {isDisplay ? "表示中" : "非表示中"}
        </p>
        <button
          onClick={() => {
            setIsDisplay(!isDisplay)
          }}
          className="btn "
        >
          toggle
        </button>
        {isDisplay &&
          (isLoading ? (
            <p>Loading</p>
          ) : (
            <ul className=" mx-20">
              {items.map((item) => (
                <li key={item.author}>
                  <div>{item.title}</div>
                  <div>{item.author}</div>
                </li>
              ))}
            </ul>
          ))}
      </div>
    </>
  )
}

export default DataFetch
DataFetch.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
