import { TaskList } from "data/task"
import { TApiResponceError } from "interface/api"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"

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
        res.status(200).json([{ ..._req.body }])
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
