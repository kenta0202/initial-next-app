import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { delay } from "util/func/fetchDelay";

interface RootObject {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getComments = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=3")
      .then(delay(1000));
    const data = responce.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.message);
    }
  }
};

export const useQueryComments = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
    // キャッシュされたデータは常に最新とみなす→ページ遷移するたびにFetchしない
    staleTime: Infinity,
  });
};
