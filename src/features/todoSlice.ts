import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"
import { TEditTask, TTag } from "interface/todo/tasks"

export interface TaskState {
  editedTask: TEditTask
  editedTag: TTag
}

const initialState: TaskState = {
  editedTask: {
    id: 0,
    title: "",
    tag: 0,
  },
  editedTag: {
    id: 0,
    tag_name: "",
  },
}

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<TEditTask>) => {
      state.editedTask = action.payload
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },
    setEditedTag: (state, action: PayloadAction<TTag>) => {
      state.editedTag = action.payload
    },
    resetEditedTag: (state) => {
      state.editedTag = initialState.editedTag
    },
  },
})

export const { setEditedTask, resetEditedTask, setEditedTag, resetEditedTag } = taskSlice.actions

export const selectTask = (state: RootState) => state.task.editedTask
export const selectTag = (state: RootState) => state.task.editedTag

export default taskSlice.reducer
