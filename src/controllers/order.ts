import { Request, Response, NextFunction } from "express";

import { Order } from "../db/models";

const sendOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allShop = await Order.create(req.body);

    res.status(201).json(allShop);
  } catch (error) {
    res.status(400).json({ msg: "Some Error Get shops" });
  }
};

export { sendOrder };
