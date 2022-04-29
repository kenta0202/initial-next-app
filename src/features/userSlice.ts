/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type IUser = {
  uid: string;
  photeURL: string;
  displayName: string;
};
const initialState = { uid: "", photeURL: "", displayName: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action: PayloadAction<IUser, string>) => {
      state = action.payload;
      return { ...state };
    },
    setLogOut: (state) => {
      state = { uid: "", photeURL: "", displayName: "" };
      return { ...state };
    },
  },
});

export const { setLogIn, setLogOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user; /* reducerのuserと一致 */

export default userSlice.reducer;
