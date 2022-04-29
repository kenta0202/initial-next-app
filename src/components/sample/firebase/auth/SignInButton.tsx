import { useDispatch } from "react-redux";
import { signInWithGoogle } from "util/func/firebase/signInWithGoogle";

const SignInButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => void signInWithGoogle(dispatch)}>
      <p className=" py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full cursor-pointer">
        Googleでサインイン
      </p>
    </button>
  );
};

export default SignInButton;
