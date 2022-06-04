import { IUser, UserData } from "data/users"
import { TApiResponceError } from "interface/general"
import { NextApiRequest, NextApiResponse } from "next"

const handler = (_req: NextApiRequest, res: NextApiResponse<IUser[] | TApiResponceError>) => {
  try {
    if (!Array.isArray(UserData)) {
      throw new Error("Cannot find user data")
    }

    res.status(200).json(UserData)
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
