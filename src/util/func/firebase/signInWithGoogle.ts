import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { setLogIn } from "features/userSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export async function signInWithGoogle(dispatch: Dispatch<AnyAction>) {
  await signInWithPopup(auth, provider).then((res) => {
    const user = res.user;
    const userData = { uid: user.uid, photeURL: user.photoURL, displayName: user.displayName };
    dispatch(setLogIn(userData));
  });
}
