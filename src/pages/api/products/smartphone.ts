import { smartphone } from "data/products/smartphone";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(smartphone);
};

export default handler;
