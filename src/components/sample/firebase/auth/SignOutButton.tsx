import { useDispatch } from "react-redux";
import { signOut } from "util/func/firebase/signOut";
const SignOutButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className=" py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded"
      onClick={() => signOut(dispatch)}
    >
      サインアウト
    </button>
  );
};

export default SignOutButton;
