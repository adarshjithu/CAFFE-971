import mongoose from "mongoose";
import { ITable } from "../interface/Models/ITable";

const tableSchema =  new mongoose.Schema<ITable>({
    name:{type:String,required:true},
    width:{type:String,required:true},
    height:{type:String,required:true},
    length:{type:String,Required:true},
    image:{type:String,Required:true},
    chairCount:{type:Number,Required:true},
    rate:{type:Number,Required:true}
},{timestamps:true})


const Table = mongoose.model<ITable>('Table',tableSchema);
export default Table;