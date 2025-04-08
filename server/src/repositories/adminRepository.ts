import { ICategory } from "../interface/Models/ICategory";
import { IProduct } from "../interface/Models/IProduct";
import Category from "../models/categoryModel";
import { Product } from "../models/productModel";
import { deleteImageFromCloudinary } from "../utils/cloudinary/deleteImageFromCloudinary";
import { BaseRepository } from "./baseRepository";

export class AdminRepository {
    constructor() {}

    async createCategory(category: { name: string; image: string }): Promise<ICategory | null> {
        try {
            const newCategory = new Category(category);
            await newCategory.save();
            return newCategory;
        } catch (error) {
            throw error;
        }
    }
    async findCategories(): Promise<ICategory[] | null> {
        try {
            return await Category.find({}).sort({ _id: -1 }).lean();
        } catch (error) {
            throw error;
        }
    }
    async findByIdAndDelete(id: string): Promise<ICategory | null> {
        try {
            const res = await Category.findByIdAndDelete(id);
            if (res?.image) deleteImageFromCloudinary(res?.image);

            return res;
        } catch (error) {
            throw error;
        }
    }
    async findByIdAndUpdate(categoryId: string, categoryData: any): Promise<ICategory | null> {
        try {
            const res = await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
            return res;
        } catch (error) {
            throw error;
        }
    }
    async findCatgoryById(categoryId: string): Promise<ICategory | null> {
        try {
            const res = await Category.findById(categoryId);
            return res;
        } catch (error) {
            throw error;
        }
    }
    async createProduct(productObj: IProduct): Promise<IProduct | null> {
        try {
            const newProduct = new Product(productObj);
            await newProduct.save();
            return await newProduct?.populate("category");
        } catch (error) {
            throw error;
        }
    }
    async findProducts(): Promise<IProduct[] | null> {
        try {
            return await Product.find().sort({ _id: -1 }).populate("category");
        } catch (error) {
            throw error;
        }
    }
    async deleteProductById(productId: string): Promise<IProduct | null> {
        try {
            return await Product.findByIdAndDelete(productId);
        } catch (error) {
            throw error;
        }
    }
    async findProductById(productId: string): Promise<IProduct | null> {
        try {
            return await Product.findById(productId);
        } catch (error) {
            throw error;
        }
    }
    async findProductByIdAndUpdate(productId: string, productObj: any): Promise<any | null> {
        try {
             const updatedProduct = await Product.findByIdAndUpdate(productId, productObj, { new: true });
            return  await updatedProduct?.populate("category")
        } catch (error) {
            throw error;
        }
    }
  
    async getProductsAndCategory(): Promise<any | null> {
        try {
         const products = await Product.find({});
         const category = await Category.distinct('name')
         return {products,category}
        } catch (error) {
            throw error;
        }
    }
  
}
