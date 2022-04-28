import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = () => {
  void signInWithPopup(auth, provider);
};
