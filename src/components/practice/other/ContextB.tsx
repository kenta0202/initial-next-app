import { FC } from "react"
import { useStateContext } from "components/practice/other/context/StateProvider"
import PracticeTitle from "components/practice/common/PracticeTitle"
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import router from "next/router"

export const ContextB: FC = () => {
  const { setDark } = useStateContext()
  console.log("rendered ContextB")
  return (
    <>
      <PracticeTitle>ContextB (StateContext)</PracticeTitle>
      <button
        className="py-2 px-3 text-sm text-white bg-green-600 hover:bg-green-700 rounded"
        onClick={() => setDark(false)}
      >
        dark mode off
      </button>
      <ChevronDoubleLeftIcon
        onClick={() => {
          void router.push("./context-a")
        }}
        className="mt-2 w-8 h-8 text-blue-400 cursor-pointer"
      />
      <p className="">Context A</p>
    </>
  )
}
