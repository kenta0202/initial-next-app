// react
import { FC, memo } from "react"
// heroIcon
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid"
// Tagのデータ型
import { TTag } from "interface/todo/tasks"
// Redux
import { useAppDispatch } from "app/hooks"
import { setEditedTag } from "features/todoSlice"
// ReactQuery
import { useMutateTag } from "util/hooks/practice/other/todo/useMutateTag"

interface Props {
  tag: TTag
}

const TagItem: FC<Props> = ({ tag }) => {
  const dispatch = useAppDispatch()
  const { deleteTagMutation } = useMutateTag()
  console.log("rendered TagItem")
  if (deleteTagMutation.isLoading) {
    return <p>Deleting...</p>
  }
  return (
    <li className="my-3">
      <span className="font-bold">{tag.tag_name}</span>
      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="mx-1 w-5 h-5 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedTag({
                id: tag.id,
                tag_name: tag.tag_name,
              })
            )
          }}
        />
        <TrashIcon
          className="w-5 h-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteTagMutation.mutate(tag.id)
          }}
        />
      </div>
    </li>
  )
}
export const TagItemMemo = memo(TagItem)
