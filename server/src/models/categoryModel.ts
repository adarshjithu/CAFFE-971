import mongoose from "mongoose";
import { ICategory } from "../interface/Models/ICategory";


const categorySchema = new mongoose.Schema<ICategory>({
    name:{type:String,required:true},
    image:{type:String,required:true}
},{timestamps:true});

const Category  = mongoose.model<ICategory>('Category',categorySchema);

export default Category;