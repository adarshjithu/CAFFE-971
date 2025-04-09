import { Document, ObjectId } from "mongoose";


export interface IPackage extends Document{
    name: string,
    description?: string,
    price: number,
   image:string;
   products:any
   isActive:boolean;
   minQuantity:number;
   maxQuantity:number;
}