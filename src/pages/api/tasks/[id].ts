/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Task } from "data/task"
import { TApiResponceError } from "interface/api"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"

type EmptyObject = { [key: string]: never }

const handler = (
  _req: NextApiRequest,
  res: NextApiResponse<TTask | TApiResponceError | EmptyObject>
) => {
  try {
    const num = _req.query.id
    const test = Task(num)[0]

    const { method } = _req
    switch (method) {
      case "GET":
        res.status(200).json(test)
        break
      case "POST":
        res.status(200).json({ ...test, ..._req.body })
        break
      case "DELETE":
        res.status(200).json({})
        break
    }
    // res.status(200).json({ id: _req.query.id })
  } catch (err: unknown) {
    // unknown型は型の特定をしないとオブジェクトのプロパティやメソッドの参照ができない
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
