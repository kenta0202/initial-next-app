import { useCallback, useState } from "react"
import React from "react"
import Title from "components/practice/hooks/useCallback/Title"
import SubTitle from "components/practice/hooks/useCallback/SubTitle"
import Counter from "components/practice/hooks/useCallback/Counter"
import Button from "components/practice/hooks/useCallback/Button"

const UseCallback = React.memo(function UseCallback() {
  console.log("----------")
  console.log("render")
  const [countA, setCountA] = useState<number>(0)
  const [countB, setCountB] = useState<number>(0)

  // stateが更新されたら関数コンポーネントを再呼び出しする
  // index.tsxの再レンダリング前と後の関数は違うものと判断される
  // useCallbackで同じ関数コンポーネントの再呼び出しを防いでいる

  //   関数をメモ化:ページの再レンダー時に、この関数をPropsに持つ関数が再レンダーを防ぐ
  const handleCountUpA = useCallback(() => {
    setCountA((prev) => {
      return prev + 1
    })
  }, [])

  //   普通の関数:ページの再レンダー時に、この関数をPropsに持つ関数が再レンダーされてしまう
  //   const handleCountUpA = () => {
  //     setCountA((prev) => {
  //       return prev + 1
  //     })
  //   }

  //   関数をメモ化
  const handleCountUpB = useCallback(() => {
    setCountB((prev) => {
      return prev + 1
    })
  }, [])

  //   普通の関数:ページの再レンダー時に、この関数をPropsに持つ関数が再レンダーされてしまう
  //   const handleCountUpB = () => {
  //     setCountB((prev) => {
  //       return prev + 1
  //     })
  //   }

  return (
    <>
      <Title titleText={"関数のメモ化 (useCallback) + コンポーネントのメモ化(React.memo)"} />
      <SubTitle subTitleText={"A or B"} />
      <div className="text-center">
        <div>
          <Counter countertitle={"A"} count={countA} />
          {/* ButtonはonClickがイベントハンドラなので、Buttonをメモ化かつ、イベントハンドラもuseCallbackでメモ化しないといけない */}
          {/* useCallbackでメモ化された関数は、React.memoでメモ化されたコンポーネントへpropsとして渡されることで、はじめて意味を成す */}
          <Button onClick={handleCountUpA} buttonText={"もちろんA派"} />
        </div>
        <div>
          <Counter countertitle={"B"} count={countB} />
          <Button onClick={handleCountUpB} buttonText={"もちろんB派"} />
        </div>
      </div>
    </>
  )
})

export default UseCallback
