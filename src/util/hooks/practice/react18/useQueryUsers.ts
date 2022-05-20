import { useQuery } from "react-query"
import { getUsers } from "util/func/promise/getUsers"

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

export const useQueryUsers = () => {
  return useQuery<RootObject[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
    // キャッシュされたデータは常に最新とみなす(Fresh)→ページ遷移するたびにFetchしない
    staleTime: Infinity,
  })
}
