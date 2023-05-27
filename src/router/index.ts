import express from "express";

import { wrapper } from "../middlewares";
import { getShop, sendOrder, getMarket, getOrders } from "../controllers";

const router = express.Router();

// GET ALL SHOPS
router.get("/shops", wrapper(getShop));

// POST NEW ORDER
router.post("/order", wrapper(sendOrder));

// GET SHOP
router.get("/market", wrapper(getMarket));

// GET ORDERS
router.get("/orders", wrapper(getOrders));

export { router };
