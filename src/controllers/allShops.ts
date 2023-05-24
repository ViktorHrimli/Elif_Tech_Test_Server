import { Request, Response, NextFunction } from "express";

import { Shop } from "../db/models";

const getShop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allShop = await Shop.find({});

    res.status(200).json(allShop);
  } catch (error) {
    res.status(400).json({ msg: "Some Error Get shops" });
  }
};

export { getShop };
