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

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user /* reducerのuserと一致 */

export default userSlice.reducer
