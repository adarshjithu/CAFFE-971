import { Document } from "mongoose";

export interface IAddOn extends Document {
    name: string;
    image: string;
    price: number | string;
    foodType:string
    isActive:boolean
}
