import { FC, useState } from "react"
import { useRouter } from "next/router"
import { ChevronDoubleRightIcon } from "@heroicons/react/solid"
import { TaskListMemo } from "components/practice/other/todo/TaskList"

export const MainTask: FC = () => {
  const router = useRouter()
  const [text, setText] = useState("")
  console.log("rendered MainTask")
  return (
    <>
      <input
        className="py-2 px-3 mb-3 border border-gray-300"
        placeholder="dummy text ?"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        {/* <TaskEditMemo /> */}
      </div>
      <ChevronDoubleRightIcon
        onClick={() => {
          void router.push("./tags")
        }}
        className="mt-2 w-5 h-5 text-blue-500 cursor-pointer"
      />
      <p>Tag page</p>
    </>
  )
}
