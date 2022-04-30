import Home from "components/sample/firebase/auth/Home";
import ImageUploader from "components/sample/firebase/imageUpload/ImageUploader";
import UserList from "components/sample/firebase/store/UserList";
import { Suspense } from "react";

const Firebase = () => {
  return (
    <div>
      <ImageUploader />
      <UserList />
      <Home />
    </div>
  );
};

export default Firebase;
