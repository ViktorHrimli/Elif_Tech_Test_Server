"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Shema = mongoose_1.default.Schema;
const orderShema = new Shema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    adress: {
        type: String,
        require: [true, "Adress is required"],
    },
    phone: {
        type: String,
        require: [true, "Phone is required"],
    },
}, { versionKey: false, timestamps: true });
const Order = mongoose_1.default.model("order", orderShema);
exports.Order = Order;
//# sourceMappingURL=orders.js.map