import { TaskList } from "data/task"
import { TApiResponceError } from "interface/api"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"

const handler = (_req: NextApiRequest, res: NextApiResponse<TTask[] | TApiResponceError>) => {
  try {
    if (!Array.isArray(TaskList)) {
      throw new Error("Cannot find user data")
    }

    res.status(200).json(TaskList)
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
