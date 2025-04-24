import { Document } from "mongoose";
export interface IFoodStation extends Document{
 name:string;
 description:string;
 image:string;
 type:string;
}