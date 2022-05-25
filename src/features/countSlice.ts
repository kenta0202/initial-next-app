/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice /* PayloadAction  */ } from "@reduxjs/toolkit"
import { RootState } from "app/store"

type TinitialState = {
  value: number
  mode: boolean
}

export const countSlice = createSlice({
  name: "count",
  initialState: {
    // 自動で型付けをする
    value: 0,
    mode: false,
  },
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    toggleMode: (state) => {
      state.mode = !state.mode
    },
  },
})

export const { increment, decrement, toggleMode } = countSlice.actions

export const selectCount = (state: RootState) => state.count.value /* reducerのuserと一致 */
export const selectMode = (state: RootState) => state.count.mode /* reducerのuserと一致 */

export default countSlice.reducer
