import { useFileUploadtoFirebase } from "util/hooks/firebase/useOnFileUploadtoFirebase";

/* eslint-disable tailwindcss/no-custom-classname */
const ImageUploader = () => {
  const { loading, isUploaded, onFileUploadtoFirebase } = useFileUploadtoFirebase();

  return (
    <>
      {loading ? (
        <h2>アップロード中・・・</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2>アップロードが完了しました</h2>
          ) : (
            <div className="">
              <button>
                ファイルを選択
                <input
                  className="imageUploadInput"
                  type="file"
                  onChange={onFileUploadtoFirebase}
                  accept=".png,.jpeg,.jpg"
                />
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageUploader;
