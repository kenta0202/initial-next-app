/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

type TTask = {
  id: string;
  title: string;
};

const useGetTasks = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    // クエリを作成
    const CollectionRef = collection(db, "tasks");
    const getTasks = async () => {
      // Promise型を返す関数からクエリを実行してusersのQuerySnapShotを取り出す
      const QuerySnapShot = await getDocs(CollectionRef);
      // Snapshotのdocsにデータがある
      // _document>data>value>mapValue>fields
      // dataを再生成
      const newData = QuerySnapShot.docs.map((doc) => {
        return { id: doc.id, title: doc.data().title };
      }) as TTask[];
      setTasks(newData);
    };
    void getTasks();
  }, [tasks]);

  return tasks;
};

export default useGetTasks;
