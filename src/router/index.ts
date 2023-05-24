import express from "express";

import { wrapper } from "../middlewares";
import { getShop, sendOrder } from "../controllers";

const router = express.Router();

// GET ALL SHOPS
router.get("/shops", wrapper(getShop));

// POST NEW ORDER
router.post("/order", wrapper(sendOrder));

export { router };
