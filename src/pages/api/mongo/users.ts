/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        // Get data from mongodb
        const { db } = await connectToDatabase();
        const data = await db.collection("user").find().toArray(); //連想配列化

        res.status(200).json(data); // json 形式でデータを取得

        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
