/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from "axios"
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import React18NavBar from "components/general/layout/practice/navbar/React18NavBar"
import { useState } from "react"
import { flushSync } from "react-dom"
const AutoBatch = () => {
  /*
    Reactv18の新機能 StrictMode
    Developmentモード:Mount→UnMount→Mount 予期せぬバグを確認
    Productionモード:Mount
    next.config.jsで修正

    AutoBatchの機能
    レンダリングをbatchして1回にまとめる
    FlushSyncで無効化
*/

  const [count, setCount] = useState(0)
  const [fetchcount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const handleClick = () => {
    // setCount((count) => count + 1);
    // setFetchCount((fetchcount) => fetchcount + 1);
    void axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      flushSync(() => {
        setUsers(res.data)
      })
      flushSync(() => {
        setFetchCount((fetchcount) => fetchcount + 1)
      })
    })
  }
  const clickHandler = () => {
    setTimeout(() => {
      setCount1((count) => count + 1)
      setCount2((count) => count + 1)
      setCount3((count) => count + 1)
    }, 500)
  }
  console.log("Rendered AutoBatch")
  return (
    <>
      <p className="my-3 text-xl font-bold text-blue-500">Automatic batching</p>
      <p className="my-5">{fetchcount}</p>
      <button
        className="py-1 px-3 my-5 text-white bg-indigo-600 hover:bg-indigo-500 rounded"
        onClick={handleClick}
      >
        click
      </button>
      <p className="my-5">{count1}</p>
      <p className="my-5">{count2}</p>
      <p className="my-5">{count3}</p>
      <button
        className="py-1 px-3 my-5 text-white bg-indigo-600 hover:bg-indigo-500 rounded"
        onClick={clickHandler}
      >
        click
      </button>
    </>
  )
}

AutoBatch.getLayout = function getLayout(page) {
  return <PracticeLayout sampleElement={<React18NavBar />}>{page}</PracticeLayout>
}

export default AutoBatch
