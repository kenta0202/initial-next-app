/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IPerson } from "interface/practice/reactquery/Person"

export const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
  if (typeof id === "string") {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person/${id}`)
    if (res.ok) {
      return res.json()
    }
    throw new Error("error fetchig user with id")
  }
  throw new Error("invaild id")
  /* ここで吐き出したエラーをErrorBoundaryで受け取る
    react-queryはerrorをthrowする必要がある
    */
}
