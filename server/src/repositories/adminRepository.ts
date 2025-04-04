import { ICategory } from "../interface/Models/ICategory";
import Category from "../models/categoryModel";
import { deleteImageFromCloudinary } from "../utils/cloudinary/deleteImageFromCloudinary";
import { BaseRepository } from "./baseRepository";

export class AdminRepository{
    constructor(){
       
    }

    async createCategory(category:{name:string,image:string}):Promise<ICategory|null>{
        try{

            const newCategory = new Category(category);
           await  newCategory.save();
             return newCategory;

        }catch(error){
            throw error;
        }
    }
    async findCategories():Promise<ICategory[]|null>{
        try{

           return await Category.find({}).sort({_id:-1}).lean()

        }catch(error){
            throw error;
        }
    }
    async findByIdAndDelete(id:string):Promise<ICategory|null>{
        try{
           
           const res = await Category.findByIdAndDelete(id)
           if(res?.image)deleteImageFromCloudinary(res?.image)
           
           return res;
        }catch(error){
            throw error;
        }
    }

    
 
}