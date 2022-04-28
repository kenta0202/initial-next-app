import { auth } from "../../../../firebase";

const SignOutButton = () => {
  return (
    <button
      className=" py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded"
      onClick={() => {
        void auth.signOut();
      }}
    >
      サインアウト
    </button>
  );
};

export default SignOutButton;
