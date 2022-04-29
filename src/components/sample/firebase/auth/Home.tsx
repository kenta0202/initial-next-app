/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SignInButton from "./SignInButton";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../../../firebase";
import SignOutButton from "./SignOutButton";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

const Home = () => {
  // const [user] = useAuthState(auth);
  const user = useSelector(selectUser);
  return (
    <>
      <h3 className=" text-2xl">
        <span className="text-lg">■</span> Auth
      </h3>
      <div className="flex flex-col gap-2  ">
        <h3 className="text-xl ">ログイン機能</h3>
        <div>
          {user.uid ? (
            <div className="flex flex-col gap-2 items-start ">
              <UserInfo photoURL={user.photeURL} displayName={user.displayName} />
              <SignOutButton />
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
