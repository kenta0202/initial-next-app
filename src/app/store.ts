/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools({});

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  /*  enhancers: composeEnhancers, */
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
