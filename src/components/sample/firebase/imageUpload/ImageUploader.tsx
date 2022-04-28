import { useFileUploadtoFirebase } from "util/hooks/firebase/useOnFileUploadtoFirebase";

/* eslint-disable tailwindcss/no-custom-classname */
const ImageUploader = () => {
  const { loading, isUploaded, onFileUploadtoFirebase } = useFileUploadtoFirebase();

  return (
    <>
      <h3 className=" text-2xl">
        <span className="text-lg">■</span> Storage
      </h3>
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
