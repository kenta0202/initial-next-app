/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from "next"
import { IPerson } from "interface/practice/reactquery/Person"
import { TApiResponceError } from "interface/general"

const handler = (_req: NextApiRequest, res: NextApiResponse<IPerson | TApiResponceError>): void => {
  /* res.status(500).jsonの引数がNextAppiResponce<>型 */

  const data: IPerson = JSON.parse(_req.body)
  console.log(data)
  try {
    res.status(200).json(data)
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
