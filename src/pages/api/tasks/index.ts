import { TaskList } from "data/task"
import { TApiResponceError } from "interface/api"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"
import date from "date-and-time"

const handler = (_req: NextApiRequest, res: NextApiResponse<TTask[] | TApiResponceError>) => {
  const now = new Date()
  const DATE = date.format(now, "YYYY-MM-DD")

  try {
    if (!Array.isArray(TaskList)) {
      throw new Error("Cannot find user data")
    }

    const { method } = _req
    switch (method) {
      case "GET":
        res.status(200).json(TaskList)
        break
      case "POST":
        res.json([/* ...TaskList, */ { ..._req.body, created_at: DATE, updated_at: DATE }])
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
