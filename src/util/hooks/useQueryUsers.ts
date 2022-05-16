/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { delay } from "util/func/fetchDelay"

interface RootObject {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

const getUsers = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then(delay(3000))
    const data = responce.data
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.message)
    }
  }
}

export const useQueryUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    // キャッシュされたデータは常に最新とみなす(Fresh)→ページ遷移するたびにFetchしない
    staleTime: Infinity,
  })
}
