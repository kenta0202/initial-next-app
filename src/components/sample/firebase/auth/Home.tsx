/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SignInButton from "./SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import SignOutButton from "./SignOutButton";
import UserInfo from "./UserInfo";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="flex flex-col gap-2 text-center ">
        <h3 className="text-xl ">ログイン機能</h3>
        <div>
          {user ? (
            <div className="flex flex-col">
              <UserInfo />
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
