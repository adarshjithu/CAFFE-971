import mongoose from "mongoose";
import { IFoodStation } from "../interface/Models/IFoodStation";


const foodStationSchema = new mongoose.Schema<IFoodStation>({
    name:{type:String,required:true},
    type:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}
},{timestamps:true})

const FoodStation =  mongoose.model<IFoodStation>('FoodStation',foodStationSchema);
export default FoodStation;