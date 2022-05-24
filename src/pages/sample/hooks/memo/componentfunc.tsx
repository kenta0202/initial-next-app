import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import { useState, useMemo } from "react"

// 引数の数値を２倍にして返す。
// 無駄なループを実行しているため計算にかなりの時間がかかる。
const double = (count: number) => {
  let i = 0
  while (i < 1000000000) i++
  return count * 2
}

export default function Comp() {
  console.log("render App")
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // レンダー結果（計算結果）をメモ化する
  // 第２引数に count2 を渡しているため、count2 が更新された時だけ再レンダーされる。
  // count1 が更新され、コンポーネントが再レンダーされた時はメモ化したレンダー結果を
  // 利用するため再レンダーされない。
  const Counter = useMemo(() => {
    console.log("render Counter")
    const doubledCount = double(count2)

    return (
      <p>
        Counter: {count2}, {doubledCount}
      </p>
    )
  }, [count2])

  return (
    <>
      <PracticeTitle>コンポーネント関数のメモ化 (useMemo)</PracticeTitle>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)} className="btn">
        Increment count1
      </button>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)} className="btn">
        Increment count2
      </button>
    </>
  )
}

Comp.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
