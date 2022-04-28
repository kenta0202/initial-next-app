/* eslint-disable tailwindcss/no-custom-classname */
import { auth } from "../../../../firebase";

const UserInfo = () => {
  return (
    <>
      <div className=" mx-auto  ">
        <img src={auth.currentUser.photoURL} alt="" />
      </div>
      <p className="">{auth.currentUser?.displayName}</p>
    </>
  );
};

export default UserInfo;
