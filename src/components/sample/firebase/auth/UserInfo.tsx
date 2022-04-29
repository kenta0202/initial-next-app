/* eslint-disable tailwindcss/no-custom-classname */
// import { auth } from "../../../../firebase";

const UserInfo: React.FC<{ photoURL: string; displayName: string }> = ({
  photoURL,
  displayName,
}) => {
  return (
    <>
      <div className=" ">
        <img src={photoURL} alt="" />
      </div>
      <p className="">{displayName}</p>
    </>
  );
};

export default UserInfo;
