import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { useState, useEffect, useRef } from "react"

// ➀データの保持
export default function ComparePrevCount() {
  const [count, setCount] = useState(10)
  // prevCountRef.current の初期値は 0
  const prevCountRef = useRef(0)

  useEffect(() => {
    // ref オブジェクトが更新されてもコンポーネントは再レンダーされない。
    prevCountRef.current = count
    console.log(prevCountRef.current, "prevCountRef.current")
  })

  return (
    <>
      <PracticeTitle>数字の比較(useRef)</PracticeTitle>
      <div className=" space-y-4">
        <p>
          現在のcount: {count}, 前回のcount: {prevCountRef.current}
        </p>
        <p>前回のcountより{prevCountRef.current > count ? "小さい" : "大きい"}</p>
        <div className=" text-center">
          <button onClick={() => setCount(Math.floor(Math.random() * 11))} className="btn">
            Update
          </button>
        </div>
      </div>
    </>
  )
}

ComparePrevCount.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
