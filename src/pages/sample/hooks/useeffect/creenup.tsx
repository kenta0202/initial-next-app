import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { useState, useEffect } from "react"

const LIMIT = 60

function Timer() {
  // カウント
  const [timeLeft, setTimeLeft] = useState(LIMIT)

  // timeLeft をリセット（60に戻す）。
  const reset = () => {
    setTimeLeft(LIMIT)
  }

  // timeLeft を更新する。
  const tick = () => {
    console.log("tick")
    setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1))
  }

  // setInterval で１秒毎に tick を実行するタイマーを作成する副作用。
  // 第２引数に [] を渡しているので、この副作用はレンダー後の１度しか実行されない。
  useEffect(() => {
    console.log("create Timer")
    const timerId = setInterval(tick, 1000)

    // クリーンアップ関数はコンポーネントがアンマウント、もしくは副作用が再度実行された時に呼ばれる。
    // ↑で作成したタイマー（timerId）は削除しない限り、コンポーネントがアンマウントされた後も延々と実行され続けてしまう。
    // そのため、コンポーネントがアンマウント、もしくは副作用が再度実行された時に clearInterval でタイマーを削除する。
    return () => {
      console.log("cleanup Timer")
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className=" space-y-4">
      <p className=" text-2xl">time: {timeLeft}</p>
      <button onClick={reset} className=" btn">
        reset
      </button>
    </div>
  )
}

function App() {
  // コンポーネントをレンダーするかどうかのフラグ
  const [visible, setVisible] = useState(true)

  return (
    <>
      <PracticeTitle>カウントダウン(useEffect)</PracticeTitle>
      <div className=" text-center">
        <button className="mb-6 btn" onClick={() => setVisible(!visible)}>
          toggle Timer
        </button>
        {visible ? <Timer /> : ""}
      </div>
    </>
  )
}

App.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)

export default App
