import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import Counter from "components/practice/hooks/memo/Counter"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { useState } from "react"

export default function Comp() {
  console.log("render App")
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <PracticeTitle>コンポーネントのメモ化 (useMemo)</PracticeTitle>
      <p data-testid="count1">Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)} className="btn">
        Increment count1
      </button>
      <Counter count2={count2} />
      <button onClick={() => setCount2(count2 + 1)} className="btn">
        Increment count2
      </button>
    </>
  )
}

Comp.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
