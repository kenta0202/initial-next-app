import { FC } from "react"
import { useStateContext } from "components/practice/other/context/StateProvider"
import PracticeTitle from "components/practice/PracticeTitle"
import { ChevronDoubleRightIcon } from "@heroicons/react/solid"
import router from "next/router"

export const ContextA: FC = () => {
  const { dark, setDark } = useStateContext()
  console.log("rendered ContextA")
  return (
    <>
      <PracticeTitle>ContextA (StateContext)</PracticeTitle>
      <p className="my-3">{dark ? "on" : "off"}</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => setDark(!dark)}
      >
        toggle mode
      </button>
      <ChevronDoubleRightIcon
        onClick={() => {
          void router.push("./context-b")
        }}
        className="mt-2 w-8 h-8 text-blue-400 cursor-pointer"
      />
      <p className="">Context B</p>
    </>
  )
}
