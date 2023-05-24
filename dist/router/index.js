"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
exports.router = router;
router.get("/shops", (0, middlewares_1.wrapper)(controllers_1.getShop));
router.post("/order", (0, middlewares_1.wrapper)(controllers_1.sendOrder));
//# sourceMappingURL=index.js.map