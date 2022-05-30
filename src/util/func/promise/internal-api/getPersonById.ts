import axios from "axios"
import { IPerson } from "interface/practice/reactquery/Person"

// GET Promise<IPerson>
export const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
  if (typeof id === "string") {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person/${id}`)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person/${id}`)
    // if (res.ok) {
    //   return res.json() as Promise<IPerson>
    // }
    return res.data as Promise<IPerson>
    throw new Error("error fetchig user with id")
  }
  throw new Error("invaild id")
  /* ここで吐き出したエラーをErrorBoundaryで受け取る
    react-queryはerrorをthrowする必要がある
    */
}
