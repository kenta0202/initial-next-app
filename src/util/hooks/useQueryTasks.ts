import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { delay } from "util/func/fetchDelay";

interface RootObject {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTasks = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(delay(5000));
    const data = responce.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.message);
    }
  }
};

export const useQueryTasks = () => {
  return useQuery({
    queryKey: ["task"],
    queryFn: getTasks,
    // キャッシュされたデータは常に最新とみなす→ページ遷移するたびにFetchしない
    staleTime: Infinity,
  });
};
