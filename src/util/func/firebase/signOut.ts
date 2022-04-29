import { auth } from "../../../firebase";
import { setLogOut } from "features/userSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export function signOut(dispatch: Dispatch<AnyAction>) {
  void auth.signOut();
  dispatch(setLogOut());
}
