import mongoose, { Schema } from "mongoose";
import { IPackage } from "../interface/Models/Package";

const cateringPackageSchema = new Schema<IPackage>(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        products: {
            type: Map,
            of: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
            default: {},
        },
        isActive: { type: Boolean, default: true },
        minQuantity: { type: Number },
        maxQuantity: { type: Number },
        foodType: { type: String, enum: ["pureVeg", "nonVeg","mixed"], required: true },
    },

    { timestamps: true }
);

export const Package = mongoose.model<IPackage>("Package", cateringPackageSchema);
