import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import { useState, useEffect, useRef } from "react"

export default function isInitial() {
  const [count, setCount] = useState(0)
  // 初回レンダーかどうかのフラグ
  const isInitialRender = useRef(true)

  // レンダリングされる度に実行される副作用
  useEffect(() => {
    console.log("useEffect")
    if (isInitialRender.current) {
      // ref オブジェクトの更新
      isInitialRender.current = false
      console.log(isInitialRender.current)
    }
  })

  return (
    <>
      <PracticeTitle>初回レンダー or 再レンダー (useRef)</PracticeTitle>
      {/*
      1回目のレンダリング：「初回レンダー」
      2回目のレンダリング：「再レンダー」
       */}
      <div className=" space-y-3">
        <p>{isInitialRender.current ? "初回レンダー" : "再レンダー"}</p>
        <p>count: {count}</p>
        <div className="text-center ">
          <button onClick={() => setCount(count + 1)} className="text-3xl">
            +
          </button>
        </div>
      </div>
    </>
  )
}

isInitial.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
