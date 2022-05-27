import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "features/userSlice"
import countReducer from "features/countSlice"
import todoReducer from "features/todoSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer,
    task: todoReducer,
  },
})

/*
useContextと違ってレンダリング最適化が自動でされる
参照しているComponentまで再レンダリングされない

例： darkMode:true or false cartBox:[itemA,itemB]
*/

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
