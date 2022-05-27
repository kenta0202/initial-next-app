import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { useState, useMemo } from "react"

// 引数の数値を２倍にして返す。
// 不要なループを実行しているため計算にかなりの時間がかかる。
const double = (count: number) => {
  console.log("double")
  let i = 0
  while (i < 1000000000) i++
  return count * 2
}

export default function Fn() {
  console.log("render")
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // count2 を２倍にした値をメモ化する。
  // 第２引数に count2 を渡しているため、count2 が更新された時だけ値が再計算される。
  // count1 が更新され、コンポーネントが再レンダーされた時はメモ化した値を利用するため再計算されない。
  const doubledCount = useMemo(() => double(count2), [count2])

  // メモ化しない
  //   const doubledCount = double(count2)

  return (
    <>
      <PracticeTitle>変数を返す関数のメモ化➁ (useMemo)</PracticeTitle>
      <p>Counter: {count1}</p>
      <button className="btn" onClick={() => setCount1(count1 + 1)}>
        Increment(fast)
      </button>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button className="btn" onClick={() => setCount2(count2 + 1)}>
        Increment(slow)
      </button>
    </>
  )
}

Fn.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
