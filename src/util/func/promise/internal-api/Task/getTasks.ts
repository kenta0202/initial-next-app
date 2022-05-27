/* eslint-disable @typescript-eslint/no-unsafe-return */
import { TTask } from "interface/todo/tasks"

// GET Promise<TTsdk>
export const getTasks = async (): Promise<TTask[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tasks`)
    if (!res.ok)
      throw new Error(`${res.status}`) /* Errorオブジェクトを返す。引数はmessageプロパティ */
    return res.json()
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err
    }
    throw err /* 意図していない例外 */
  }
}
