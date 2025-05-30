import mongoose from "mongoose";
import { IAddOn } from "../interface/Models/IAddons";

const addOnSchema = new mongoose.Schema<IAddOn>({
    name:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    foodType:{type:String,enums:['pureVeg','nonVeg']},
    isActive:{type:Boolean,default:true}
},{timestamps:true})


const AddOn = mongoose.model<IAddOn>("AddOn",addOnSchema);
export default AddOn;