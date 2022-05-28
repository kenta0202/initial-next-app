import { Task } from "data/task"
import { TApiResponceError } from "interface/api"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"

const handler = (_req: NextApiRequest, res: NextApiResponse<TTask | TApiResponceError>) => {
  try {
    const num = _req.query.id
    const test = Task(num)[0]
    res.status(200).json(test)
    // res.status(200).json({ id: _req.query.id })
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
