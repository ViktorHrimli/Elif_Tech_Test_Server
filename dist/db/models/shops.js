"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Shema = mongoose_1.default.Schema;
const shopsShema = new Shema({
    shop: {
        type: String,
        required: [true, "Shop is required"],
    },
    title: {
        type: String,
        required: [true, "food is required"],
    },
    description: {
        type: String,
        required: [true],
    },
    photo: {
        type: String,
        required: [true],
    },
    price: {
        type: Number,
        required: [true],
    },
}, { versionKey: false, timestamps: true });
const Shop = mongoose_1.default.model("shop", shopsShema);
exports.Shop = Shop;
//# sourceMappingURL=shops.js.map