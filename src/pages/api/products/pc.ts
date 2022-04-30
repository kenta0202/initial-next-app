import { pc } from "data/products/pc";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(pc);
};

export default handler;
