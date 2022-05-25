/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IPerson } from "interface/practice/reactquery/Person"

// GET Promise<IPerson>
export const getPerson = async (): Promise<IPerson[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/person`)
    if (!res.ok)
      throw new Error(`${res.status}`) /* Errorオブジェクトを返す。引数はmessageプロパティ */
    return res.json()
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err
    }
    throw err /* 意図していない例外 */
  }

  /* エラー(message)はErrorBoundaryで受け取る */
}
