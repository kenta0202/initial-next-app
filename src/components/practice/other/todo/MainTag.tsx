import { FC } from "react"
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { TagEditMemo } from "components/practice/other/todo/TagEdit"
import { TagListMemo } from "components/practice/other/todo/TagList"

export const MainTag: FC = () => {
  const router = useRouter()

  console.log("rendered MainTag")
  return (
    <>
      <p className="mb-10 text-xl font-bold">Tags</p>

      <div className="grid grid-cols-2 gap-40">
        <TagListMemo />
        <TagEditMemo />
      </div>

      <ChevronDoubleLeftIcon
        onClick={() => {
          void router.push("./todo")
        }}
        className="mt-2 w-10 h-10 text-blue-500 cursor-pointer"
      />
      <p className="text-xl">Task page</p>
    </>
  )
}
