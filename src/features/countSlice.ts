/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type ICount = {
  count: number;
};

export const countSlice = createSlice({
  name: "count",
  initialState: {
    // 自動で型付けをする
    count: 0,
  },
  reducers: {
    increment: (state: ICount) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export const selectCount = (state: RootState) => state.count.count; /* reducerのuserと一致 */

export default countSlice.reducer;
