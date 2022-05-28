import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // 自動で型付けをする
    user: { uid: "", photeURL: "", displayName: "" },
  },
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        uid: string
        photeURL: string
        displayName: string
      }>
    ) => {
      state.user = action.payload
      return { ...state }
    },
    logout: (state) => {
      state.user = { uid: "", photeURL: "", displayName: "" }
      return { ...state }
    },
  },
})

// Action
export const { login, logout } = userSlice.actions

// useAppSelectorの引数になる
export const selectCount = (state: RootState) => state.count.value /* reducerのuserと一致 */
export const selectUser = (state: RootState) => state.user.user /* reducerのuserと一致 */

export default userSlice.reducer
