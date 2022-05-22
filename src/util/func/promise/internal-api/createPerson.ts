import { IPerson } from "interface/practice/reactquery/Person"

// Post
export const createPerson = async (id: string, name: string, age: number): Promise<IPerson> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person/create`, {
      method: "POST",
      body: JSON.stringify({ id, name, age }),
    })
    if (!res.ok)
      throw new Error(`${res.status}`) /* Errorオブジェクトを返す。引数はmessageプロパティ */
    return res.json() as Promise<IPerson>
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err
    }
    throw err /* 意図していない例外 */
  }
}
