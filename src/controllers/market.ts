import { Request, Response } from "express";
import { Market } from "../db/models";

const getMarket = async (req: Request, res: Response) => {
  const market = await Market.find({});

  res.status(200).json(market);
};

export { getMarket };
