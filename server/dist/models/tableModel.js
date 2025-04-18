"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tableSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    width: { type: String, required: true },
    height: { type: String, required: true },
    length: { type: String, Required: true },
    image: { type: String, Required: true },
    chairCount: { type: Number, Required: true },
    rate: { type: Number, Required: true }
}, { timestamps: true });
const Table = mongoose_1.default.model('Table', tableSchema);
exports.default = Table;
