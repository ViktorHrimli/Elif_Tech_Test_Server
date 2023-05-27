import { Request, Response } from "express";

import { Order } from "../db/models";

const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({});

  res.status(200).json(orders);
};

export { getOrders };
