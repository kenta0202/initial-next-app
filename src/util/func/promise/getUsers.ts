/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios"
import { delay } from "../fetchDelay"

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

export const getUsers = async () => {
  try {
    const responce: AxiosResponse<RootObject[]> = await axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then(delay(3000))
    const data = responce.data
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error("Network responce not ok")
    }
  }
}
