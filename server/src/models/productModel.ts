import mongoose, { Schema } from "mongoose";
import { FoodTypes } from "../types/FoodEnums";
import { IProduct } from "../interface/Models/IProduct";

const productSchema = new Schema<IProduct>(
    {
    name: {type: String, required: true},
    category: {type: mongoose.Types.ObjectId,ref:'Category', required: true},
    type: {type: String, enum: Object.values(FoodTypes), required: true},
    image: {type: String, required: true},
    isActive:{type:Boolean,required:true,default:true}
    },
    {timestamps: true}
) 

export const Product = mongoose.model<IProduct>("Product", productSchema)