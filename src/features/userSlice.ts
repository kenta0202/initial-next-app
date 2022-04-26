/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // 自動で型付けをする
    user: { uid: "", photeURL: "", displayName: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: "", photeURL: "", displayName: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user; /* reducerのuserと一致 */

export default userSlice.reducer;
