import { TaskList } from "data/task"
import { TApiResponceError } from "interface/general"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"
import { getDate } from "util/func/getDate"

// GET,POST /api/tasks/
const handler = (_req: NextApiRequest, res: NextApiResponse<TTask[] | TApiResponceError>) => {
  try {
    if (!Array.isArray(TaskList)) {
      throw new Error("Cannot find user data")
    }

    const { method } = _req
    switch (method) {
      // Read
      case "GET":
        res.status(200).json(TaskList)
        break
      // Create
      case "POST":
        res.status(200).json([{ ..._req.body, created_at: getDate(), updated_at: getDate() }])
        break
    }
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
