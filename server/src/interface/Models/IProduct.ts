import { Document} from "mongoose";
import { FoodTypes } from "../../types/FoodEnums";


export interface IProduct extends Document {
    name: string,
    category: any
    type: FoodTypes,
    image: string;
    isActive:boolean
}