import { Document, ObjectId } from "mongoose";
export enum FoodType {
  PURE_VEG = 'pureVeg',
  NON_VEG = 'nonVeg',
}


export interface IPackage extends Document{
    name: string,
    description?: string,
    price: number,
   image:string;
   products:any
   isActive:boolean;
   minQuantity:number;
   maxQuantity:number;
   foodType:FoodType
}