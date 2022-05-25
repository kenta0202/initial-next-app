/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../../fetchDelay"

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

// データを返すPromise関数
export const getUsers = async () => {
  try {
    const { data } = await axios
      .get<RootObject[]>("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then(delay(3000))
    return data
  } catch (err: unknown) {
    if (err instanceof Error) {
      // if (axios.isAxiosError(err) && err.response) {
      throw err
    }
    throw err /* 意図していない例外 */
  }
}
