"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const addOnSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    foodType: { type: String, enums: ['pureVeg', 'nonVeg'] },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });
const AddOn = mongoose_1.default.model("AddOn", addOnSchema);
exports.default = AddOn;
