import { Document } from "mongoose";
export interface ITable extends Document{
    name:string;
    width:any;
    height:any;
    length:any;
    chairCount:number;
    rate:number;
    image:string
}