/* eslint-disable react/no-unescaped-entities */
import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { useMemo, useState } from "react"

const heavyExponentiationFunc = (count: number) => {
  console.log("計算中")
  let i = 0
  while (i < 10000) {
    i++
  }
  return count ** 2
}

const UseMemo = () => {
  console.log("render")
  const [count, setCount] = useState<number>(2)
  const [userName, setUserName] = useState<string>("")

  //   const exponentiation = heavyExponentiationFunc(count)

  //   メモ化　Renderする度に走る
  const Memoexponentiation = useMemo(() => {
    return heavyExponentiationFunc(count)
  }, [count])

  return (
    <>
      <PracticeTitle>変数を返す関数のメモ化➀ (useMemo)</PracticeTitle>
      <div className=" space-y-4 text-center">
        <div>
          <button
            onClick={() => {
              setCount((prev) => prev + 1)
            }}
            className=" text-xl btn"
          >
            {count}
          </button>
          のべき乗は <span className="py-1 px-4 text-xl">"{Memoexponentiation}"</span>
        </div>
        <form action="" className=" space-x-2">
          <label htmlFor="username">テキスト:</label>
          <input
            type="text"
            name="username"
            id=""
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            className=" text-darkgrey"
          />
        </form>
      </div>
    </>
  )
}

UseMemo.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)

export default UseMemo
