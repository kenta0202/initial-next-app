/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from "next";
import { smartphone } from "../../../data/products/smartphone";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(smartphone);
};

export default handler;
