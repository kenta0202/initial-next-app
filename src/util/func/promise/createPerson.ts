/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosResponse } from "axios"
import { IPerson } from "interface/practice/reactquery/Person"

// Post
export const createPerson = async (id: string, name: string, age: number): Promise<IPerson> => {
  try {
    const responce: Response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person/create`,
      { method: "POST", body: JSON.stringify({ id, name, age }) }
    )
    if (responce.ok) {
      return responce.json()
    }
  } catch (error) {
    throw new Error("Network createPerson")
  }
}
