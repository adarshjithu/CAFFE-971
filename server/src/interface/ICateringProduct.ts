import { FoodCategory, FoodTypes } from "../types/FoodEnums";

export interface ICateringProduct extends Document {
    name: string,
    category: FoodCategory,
    type: FoodTypes,
    imageURL: string
}