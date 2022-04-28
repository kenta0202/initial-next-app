import { storage } from "../../../firebase";
import { ref, /* uploadBytes,  */ uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export const useFileUploadtoFirebase = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isUploaded, setUploaded] = useState<boolean>(false);

  // input要素 type="file"のonChangeイベント
  const onFileUploadtoFirebase = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      // 格納場所への参照を作成
      const storageRef = ref(storage, "image/" + file.name);

      //   画像をアップロード
      const uploadImage = uploadBytesResumable(storageRef, file);

      uploadImage.on(
        "state_changed",

        (snapshot) => {
          setLoading(true);
        },
        (err) => {
          console.log(err);
        },
        () => {
          setLoading(false);
          setUploaded(true);
        }
      );
      // uploadBytes(storageRef, file).then((snapshot) => {
      //   console.log("Uploaded a blob or file!");
      // });
    }
  };

  return { loading, isUploaded, onFileUploadtoFirebase };
};
