import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "lib/prisma"
// GET /api/users
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.findMany({})
  res.json(result)
}

/*
接続できるか確かめ
$ npx prisma db pull

DBに反映
$ npx prisma format && npx prisma db push

npx prisma studio

prisma clientに反映する
npx prisma generate


*/
