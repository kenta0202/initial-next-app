import { NextApiRequest, NextApiResponse } from "next"
import { IPerson } from "interface/practice/reactquery/Person"
import { TApiResponceError } from "interface/general"

const handler = (
  _req: NextApiRequest,
  res: NextApiResponse<IPerson[] | TApiResponceError>
): void => {
  /* res.status(500).jsonの引数がNextAppiResponce<>型 */
  try {
    console.log("getting person")
    res.status(200).json([
      { id: "1", name: "John", age: 25 },
      { id: "2", name: "Mike", age: 66 },
      { id: "3", name: "Ken", age: 44 },
    ])
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
