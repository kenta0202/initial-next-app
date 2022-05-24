import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/NavBar"
import PracticeTitle from "components/practice/PracticeTitle"
import React, { useState } from "react"
import { useAutoResize } from "util/hooks/practice/hooks/useAutoResize"

const textArea = () => {
  // 画面に表示するItem一覧の値を管理
  const [itemList, setItemList] = useState<string[]>([])
  // textareaに入力された値を管理
  const [value, setValue] = useState<string>("")

  // 送信ボタンを押したときに発火するイベント
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value === "") return
    setItemList([...itemList, value])
    setValue("")
  }
  // 文字をInputしたときに発火するイベント
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  /*
  textarea要素の高さを動的に調整するためのカスタムフック
  textareaへの参照を持つ
  Inputしたvalueを引数してuseEffectの副作用にしている
  */

  const textAreaRef = useAutoResize(value)

  return (
    <>
      <PracticeTitle>TextAreaのサイズを動的に変更 (useRef)</PracticeTitle>
      <div>
        <div>
          {itemList.length === 0 ? (
            <h3>No Items</h3>
          ) : (
            <ul>
              {itemList.map((item) => {
                return <li key={item}>{item}</li>
              })}
            </ul>
          )}
        </div>
        <form onSubmit={handleSubmit} className=" space-x-2">
          <textarea
            value={value}
            onChange={handleOnChange}
            ref={textAreaRef}
            className="text-darkgrey"
          ></textarea>
          <button className="btn">送信する</button>
        </form>
      </div>
    </>
  )
}

textArea.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)

export default textArea
