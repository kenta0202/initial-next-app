import PracticeLayout from "components/general/layout/practice/PracticeLayout"
import NavBar from "components/practice/common/NavBar"
import PracticeTitle from "components/practice/common/PracticeTitle"
import React, { useEffect, useRef, useState } from "react"

type TList = {
  id: number
  text: string
}
const Todo = () => {
  console.log("render")
  const [lists, setLists] = useState<TList[]>([]) /* List */
  /* useStateの引数は変数を返す関数でもOK */
  const [value, setValue] = useState("") /* 入力値 */
  const inputRef = useRef<HTMLInputElement>(null)

  //   listsが変わったとき or 初回
  useEffect(() => {
    inputRef.current.focus()
    console.log(lists)
  }, [lists])

  //   入力されたとき
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  //   クリックされたとき
  const handleOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return

    //入力されたValueをセット
    const id = lists.length
    const newList = [...lists, { id, text: value }]
    // リストを作成
    setLists(newList)

    // 入力されたValueをクリア
    setValue("")
  }

  return (
    <>
      <PracticeTitle>TaskList</PracticeTitle>
      <form className="  space-x-2" onSubmit={handleOnClick}>
        <input
          placeholder="Input Name"
          type="text"
          value={value}
          ref={inputRef}
          onChange={onChangeHandle}
          className=" text-darkgrey"
        />
        <button>タスクを追加</button>
      </form>
      <div>
        {lists.map((list) => (
          <div key={list.id}>{list.text}</div>
        ))}
      </div>
    </>
  )
}

Todo.getLayout = (page) => (
  <PracticeLayout NavBarElement={<NavBar sampleName={"Hooks"} />}>{page}</PracticeLayout>
)
export default Todo
