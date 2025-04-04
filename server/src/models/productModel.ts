import mongoose, { Schema } from "mongoose";
import { FoodTypes } from "../types/FoodEnums";

const productSchema = new Schema(
    {
    name: {type: String, required: true},
    category: {type: mongoose.Types.ObjectId,ref:'Category', required: true},
    type: {type: String, enum: Object.values(FoodTypes), required: true},
    image: {type: String, required: true},
    },
    {timestamps: true}
) 

export const Product = mongoose.model("Product", productSchema)