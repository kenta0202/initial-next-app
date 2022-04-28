import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

type TUser = {
  email: string;
  name: string;
  admin: boolean;
  age?: number;
  id: string;
};

const useGetUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    // クエリを作成
    const usersCollectionRef = collection(db, "users");
    const getUsers = async () => {
      // Promise型を返す関数からクエリを実行してusersのQuerySnapShotを取り出す
      const usersQuerySnapShot = await getDocs(usersCollectionRef);
      // Snapshotのdocsにデータがある
      // _document>data>value>mapValue>fields
      // dataを再生成
      const newData = usersQuerySnapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }) as TUser[];
      setUsers(newData);
    };
    void getUsers();
  }, []);

  return users;
};

export default useGetUsers;
