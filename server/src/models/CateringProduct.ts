import mongoose, { Schema } from "mongoose";
import { ICateringProduct } from "../interface/ICateringProduct";
import { FoodCategory, FoodTypes } from "../types/FoodEnums";

const cateringProductSchema = new Schema<ICateringProduct>(
    {
    name: {type: String, required: true},
    category: {type: String, enum: Object.values(FoodCategory), required: true},
    type: {type: String, enum: Object.values(FoodTypes), required: true},
    imageURL: {type: String, required: true},
    },
    {timestamps: true}
) 

export const CateringProduct = mongoose.model<ICateringProduct>("CateringProduct", cateringProductSchema)