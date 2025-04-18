import mongoose from "mongoose";
import { ICategory } from "../interface/Models/ICategory";
import { IProduct } from "../interface/Models/IProduct";
import { IPackage } from "../interface/Models/Package";
import Category from "../models/categoryModel";
import { Package } from "../models/packageModel";
import { Product } from "../models/productModel";
import { deleteImageFromCloudinary } from "../utils/cloudinary/deleteImageFromCloudinary";
import { BaseRepository } from "./baseRepository";
import Chair from "../models/chairModel";
import { IChair } from "../interface/Models/IChair";
import { NotFoundError } from "../constants/customErrors";
import { ITable } from "../interface/Models/ITable";
import Table from "../models/tableModel";

export class AdminRepository extends BaseRepository {
    constructor() {
        super(null);
    }

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
            return await updatedProduct?.populate("category");
        } catch (error) {
            throw error;
        }
    }

    async getProductsAndCategory(): Promise<any | null> {
        try {
            const products = await Product.find({});
            const category = await Category.distinct("name");
            return { products, category };
        } catch (error) {
            throw error;
        }
    }

    async findProductsByFiltering({ search, filter, category }: any): Promise<IProduct[] | null> {
        try {
            const res = await Product.aggregate([
                {
                    $match: {
                        name: { $regex: search, $options: "i" }, // Correct way to use regex with options
                    },
                },
                {
                    $match: {
                        type: { $regex: filter, $options: "i" },
                    },
                },
                {
                    $lookup: {
                        from: "categories",
                        localField: "category",
                        foreignField: "_id",
                        as: "categoryData",
                    },
                },
                {
                    $unwind: "$categoryData",
                },
                {
                    $match: {
                        "categoryData.name": category,
                    },
                },
            ]);

            return res;
        } catch (error) {
            throw error;
        }
    }

    async createPackage(packages: any): Promise<any | null> {
        try {
            const newPackage = new Package(packages);
            await newPackage.save();
            return newPackage;
        } catch (error) {
            throw error;
        }
    }
    async findAllPackages(): Promise<any | null> {
        try {
            return await Package.find({}).sort({ _id: -1 });
        } catch (error) {
            throw error;
        }
    }
    async findPackageByIdAndDelete(packageId: string): Promise<IPackage | null> {
        try {
            return await Package.findByIdAndDelete(packageId);
        } catch (error) {
            throw error;
        }
    }
    async updateStock(query: any): Promise<any | null> {
        try {
            return await Package.updateOne({ _id: query?.packageId }, { $set: { isActive: query?.stock == "true" ? true : false } });
        } catch (error) {
            throw error;
        }
    }

    async getCategoryAndProducts(packageId: string): Promise<any | null> {
        try {
            let products: any = [];

            const res = await Package.aggregate([
                {
                    $facet: {
                        categories: [{ $match: { _id: new mongoose.Types.ObjectId(packageId) } }],
                    },
                },
            ]);

            const categories = Object.keys(res[0]?.categories[0]?.products || {});
            const firstCategoryProducts = res[0]?.categories[0]?.products[categories[0]];

            if (firstCategoryProducts && firstCategoryProducts.length > 0) {
                const productlist = await Product.find({ _id: { $in: firstCategoryProducts } });
                products = productlist;
            }

            return { categories, products };
        } catch (error) {
            throw error;
        }
    }

    async getAllProductsByPackageCategory(query: any): Promise<any | null> {
        try {
            const res = await Package.aggregate([
                {
                    $facet: {
                        categories: [{ $match: { _id: new mongoose.Types.ObjectId(query?.packageId) } }],
                    },
                },
            ]);
            const products = res[0].categories[0]?.products[query?.category];
            return await Product.find({ _id: { $in: products } });
        } catch (error) {
            throw error;
        }
    }

    async deleteProductFromPackage(query: any): Promise<any | null> {
        try {
            const { category, packageId, productId } = query;
            const field = `products.${category}`;

            const res = await Package.updateOne({ _id: packageId }, { $pull: { [field]: productId } });

            return res;
        } catch (error) {
            throw error;
        }
    }
    async addProductInPackage(query: any): Promise<any | null> {
        try {
            const { category, packageId, productId } = query;
            const field = `products.${category}`;

            const res = await Package.updateOne({ _id: packageId }, { $addToSet: { [field]: productId } });

            return res;
        } catch (error) {
            throw error;
        }
    }

    async updatePackageImage(packageId: string, image: string): Promise<IPackage | null> {
        try {
            return await Package.findByIdAndUpdate(packageId, { image: image }, { new: true });
        } catch (error) {
            throw error;
        }
    }
    async editPackage(packageId: string, packageData: any): Promise<IPackage | null> {
        try {
            return await Package.findByIdAndUpdate(packageId, packageData, { new: true });
        } catch (error) {
            throw error;
        }
    }
    async createNewChair(formData: any): Promise<IChair | null> {
        try {
            const newChair = new Chair(formData);
            await newChair.save();
            return newChair;
        } catch (error) {
            throw error;
        }
    }
    async findAllChairs(): Promise<IChair[] | null> {
        try {
            return await Chair.find().sort({_id:-1});
        } catch (error) {
            throw error;
        }
    }
    async deleteChairById(chairId:string): Promise<IChair | null> {
        try {
            const image = await Chair.findOne({_id:chairId});
            if(image) await deleteImageFromCloudinary(image.image);
            return await Chair.findByIdAndDelete(chairId)
        } catch (error) {
            throw error;
        }
    }
    async updateChair(chairId:string,formData:any): Promise<IChair | null> {
        try {
            if(formData?.image){
                const chairData = await Chair.findOne({_id:chairId});
               if(chairData) await deleteImageFromCloudinary(chairData?.image)
            }
             const res =  await Chair?.findByIdAndUpdate(chairId,formData,{new:true});
             if(!res) throw new NotFoundError('Already removed from the database');
             return res;
        } catch (error) {
            throw error;
        }
    }
    async createTable(formData:any): Promise<ITable | null> {
        try {
            console.log(formData)
            const newTable = new Table(formData);
            await newTable.save();
            return newTable;
        } catch (error) {
            throw error;
        }
    }
    async findAllTables(): Promise<ITable[] | null> {
        try {
             return await Table.find().sort({_id:-1})
        } catch (error) {
            throw error;
        }
    }
    async deleteTableById(tableId:string): Promise<ITable| null> {
        try {
             return await Table.findByIdAndDelete(tableId)
        } catch (error) {
            throw error;
        }
    }
    async updateTableById(tableId:string,formData:any): Promise<ITable| null> {
        try {
            if(formData?.image){
                const table = await Table.findOne({_id:tableId});
               if(table) await deleteImageFromCloudinary(table?.image);
            }

            return await Table?.findByIdAndUpdate(tableId,formData,{new:true})
        } catch (error) {
            throw error;
        }
    }
}
