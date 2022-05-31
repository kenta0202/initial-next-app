//  react
import { FC, useState } from "react"
import { useRouter } from "next/router"
// heroicon
import { ChevronDoubleRightIcon } from "@heroicons/react/solid"
// Component
import { TaskListMemo } from "components/practice/other/todo/TaskList"
import { TaskEditMemo } from "components/practice/other/todo/TaskEdit"

export const MainTask: FC = () => {
  const router = useRouter()

  // LocalState
  const [text, setText] = useState("")
  console.log("rendered MainTask")
  return (
    <>
      <input
        className="py-2 px-3 mb-3 text-darkgrey border border-gray-300"
        placeholder="dummy text ?"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div>
      <ChevronDoubleRightIcon
        onClick={() => {
          void router.push("./tags")
        }}
        className="mt-2 w-10 h-10 text-blue-500 cursor-pointer"
      />
      <p className="text-xl">Tag page</p>
    </>
  )
}
