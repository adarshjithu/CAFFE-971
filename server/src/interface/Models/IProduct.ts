import { ObjectId } from "mongoose";
import { FoodTypes } from "../../types/FoodEnums";


export interface IProduct extends Document {
    name: string,
    category: string|ObjectId,
    type: FoodTypes,
    image: string;
}