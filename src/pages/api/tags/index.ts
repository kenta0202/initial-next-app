import { Tags } from "data/task"
import { TApiResponceError } from "interface/general"
import { TTag } from "interface/todo/tasks"
import { NextApiRequest, NextApiResponse } from "next"

// GET /api/tags
const handler = (_req: NextApiRequest, res: NextApiResponse<TTag[] | TApiResponceError>) => {
  try {
    if (!Array.isArray(Tags)) {
      throw new Error("Cannot find user data")
    }

    const { method } = _req
    switch (method) {
      // Read
      case "GET":
        res.status(200).json(Tags)
        break
      // Create
      case "POST":
        res.status(200).json([_req.body]) /* TTag[]として返る */
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
