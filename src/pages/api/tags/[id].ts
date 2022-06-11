/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CreateTag } from "data/task"
import { TApiResponceError } from "interface/general"
import { TTag } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"

type EmptyObject = { [key: string]: never }

// GET,DELETE  /api/tags/[id]
const handler = (
  _req: NextApiRequest,
  res: NextApiResponse<TTag | TApiResponceError | EmptyObject>
) => {
  try {
    // 動的なURLの値を取得
    const num = _req.query.id
    // 値を引数にTaskを作成
    const Tag = CreateTag(num)

    const { method } = _req
    switch (method) {
      case "GET":
        res.status(200).json(Tag)
        break
      // Update
      case "POST":
        res.status(200).json({ ..._req.body }) /* TTag型として */
        break
      //   Delete
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
