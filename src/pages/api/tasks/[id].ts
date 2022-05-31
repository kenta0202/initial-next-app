/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CreateTask } from "data/task"
import { TApiResponceError } from "interface/api"
import { TTask } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"
import { getDate } from "util/func/getDate"

type EmptyObject = { [key: string]: never }

// GET,DELETE  /api/tasks/[id]
const handler = (
  _req: NextApiRequest,
  res: NextApiResponse<TTask | TApiResponceError | EmptyObject>
) => {
  try {
    // 動的なURLの値を取得
    const num = _req.query.id
    // 値を引数にTaskを作成
    const Task = CreateTask(num)

    const { method } = _req
    switch (method) {
      case "GET":
        res.status(200).json(Task)
        break
      // Update
      case "POST":
        res.status(200).json({ ..._req.body, created_at: getDate(), updated_at: getDate() })
        break
      // Delete
      case "DELETE":
        res.status(200).json({})
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
