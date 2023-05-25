import express from "express";

import { wrapper } from "../middlewares";
import { getShop, sendOrder, getMarket } from "../controllers";

const router = express.Router();

// GET ALL SHOPS
router.get("/shops", wrapper(getShop));

// POST NEW ORDER
router.post("/order", wrapper(sendOrder));

// GET SHOP
router.get("/market", wrapper(getMarket));

export { router };
