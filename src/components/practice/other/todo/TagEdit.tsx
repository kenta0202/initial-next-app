// React
import { FC, memo, FormEvent } from "react"
// Redux
import { useAppDispatch, useAppSelector } from "app/hooks"
import { selectTag, setEditedTag } from "features/todoSlice"
// ReactQuery
import { useMutateTag } from "util/hooks/practice/other/todo/useMutateTag"
import { uid } from "uid"

// TTagの型 (id:string; tag_name:string;)

const TagEdit: FC = () => {
  //   Redux
  const editedTag = useAppSelector(selectTag)
  const dispatch = useAppDispatch()
  //   ReactQuery
  const { createTagMutation, updateTagMutation } = useMutateTag()

  //  onSubmitイベント関数
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Tagを追加
    if (editedTag.id === "0") createTagMutation.mutate({ tag_name: editedTag.tag_name, id: uid() })
    else {
      // Tagを編集
      updateTagMutation.mutate({ ...editedTag })
    }
  }
  console.log("rendered TagEdit")

  if (updateTagMutation.isLoading) {
    return <span>Updating...</span>
  }
  if (createTagMutation.isLoading) {
    return <span>Creating...</span>
  }
  return (
    <div>
      {/* onSubmitイベント */}
      <form onSubmit={submitHandler}>
        <input
          className="py-2 px-3 mb-3 text-darkgrey border border-gray-300"
          placeholder="new tag ?"
          type="text"
          //   onChangeイベント
          onChange={(e) => dispatch(setEditedTag({ ...editedTag, tag_name: e.target.value }))}
          value={editedTag.tag_name}
        />
        <button
          className="py-2 px-3 m-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
          disabled={!editedTag.tag_name}
        >
          {editedTag.id === "0" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  )
}
export const TagEditMemo = memo(TagEdit)
