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
import { BadRequestError, NotFoundError } from "../constants/customErrors";
import { ITable } from "../interface/Models/ITable";
import Table from "../models/tableModel";
import FoodStation from "../models/foodStationModel";
import { IFoodStation } from "../interface/Models/IFoodStation";
import { IAddOn } from "../interface/Models/IAddons";
import AddOn from "../models/addonModel";

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
    async updateProductStatus(productId: string): Promise<IProduct | null> {
        try {
            return await Product.findByIdAndUpdate(
                { _id: productId },
                [
                    {
                        $set: {
                            isActive: { $not: "$isActive" }, // flips true to false, false to true
                        },
                    },
                ],
                { new: true }
            );
        } catch (error) {
            throw error;
        }
    }
    async findProducts(filter: any): Promise<any | null> {
        //  const res = await Product?.find().populate('category')

        //  return {products:res,count:res?.length}
      
        const { type, isActive, search, categoryName, page } = filter;
        const matchStage: any = {};

        // Basic filters
        if (type && type !== "all") {
            matchStage.type = type;
        }

        if (isActive && isActive !== "all") {
            matchStage.isActive = isActive === "active";
        }

        if (search) {
            matchStage.name = { $regex: search, $options: "i" };
        }

        const pipeline: any[] = [
            { $match: matchStage },

            // Join with Category collection
            {
                $lookup: {
                    from: "categories", // your actual collection name (case-sensitive!)
                    localField: "category",
                    foreignField: "_id",
                    as: "category",
                },
            },
            // Flatten the array (category is an array after $lookup)
            { $unwind: "$category" },
        ];

        // Add category name filter if needed
        if (categoryName && categoryName !== "all") {
            pipeline.push({
                $match: {
                    "category.name": { $regex: categoryName, $options: "i" },
                },
            });
        }

        // Sort by latest
        pipeline.push({ $sort: { _id: -1 } });
        pipeline.push({ $skip: (Number(page) - 1) * 10 });
        pipeline.push({ $limit: 10 });

        const products = await Product.aggregate(pipeline);
        const allProductCount = await Product?.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }]);
        console.log(products)
        return { products: products, count: allProductCount[0]?.count };
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
            return await Chair.find().sort({ _id: -1 });
        } catch (error) {
            throw error;
        }
    }
    async deleteChairById(chairId: string): Promise<IChair | null> {
        try {
            const image = await Chair.findOne({ _id: chairId });
            if (image) await deleteImageFromCloudinary(image.image);
            return await Chair.findByIdAndDelete(chairId);
        } catch (error) {
            throw error;
        }
    }
    async updateChair(chairId: string, formData: any): Promise<IChair | null> {
        try {
            if (formData?.image) {
                const chairData = await Chair.findOne({ _id: chairId });
                if (chairData) await deleteImageFromCloudinary(chairData?.image);
            }
            const res = await Chair?.findByIdAndUpdate(chairId, formData, { new: true });
            if (!res) throw new NotFoundError("Already removed from the database");
            return res;
        } catch (error) {
            throw error;
        }
    }
    async createTable(formData: any): Promise<ITable | null> {
        try {
            console.log(formData);
            const newTable = new Table(formData);
            await newTable.save();
            return newTable;
        } catch (error) {
            throw error;
        }
    }
    async findAllTables(): Promise<ITable[] | null> {
        try {
            return await Table.find().sort({ _id: -1 });
        } catch (error) {
            throw error;
        }
    }
    async deleteTableById(tableId: string): Promise<ITable | null> {
        try {
            return await Table.findByIdAndDelete(tableId);
        } catch (error) {
            throw error;
        }
    }
    async updateTableById(tableId: string, formData: any): Promise<ITable | null> {
        try {
            if (formData?.image) {
                const table = await Table.findOne({ _id: tableId });
                if (table) await deleteImageFromCloudinary(table?.image);
            }

            return await Table?.findByIdAndUpdate(tableId, formData, { new: true });
        } catch (error) {
            throw error;
        }
    }
    async createNewFoodStation(formData: any): Promise<IFoodStation | null> {
        try {
            const newFoodStation = new FoodStation(formData);
            await newFoodStation.save();
            return newFoodStation;
        } catch (error) {
            throw error;
        }
    }
    async findByIdAndDeleteFoodStation(foodStationId: string): Promise<IFoodStation | null> {
        try {
            const foodStation = await FoodStation.findByIdAndDelete(foodStationId);
            if (!foodStation) throw new NotFoundError("Food station not found for deletion");
            return foodStation;
        } catch (error) {
            throw error;
        }
    }
    async getAllFoodStations(): Promise<IFoodStation[] | null> {
        try {
            return await FoodStation.find().sort({ _id: -1 });
        } catch (error) {
            throw error;
        }
    }
    async updateFoodStation(foodStationId: string, formData: any): Promise<IFoodStation | null> {
        try {
            if (formData?.image) {
                const foodStation: any = await FoodStation.findOne({ _id: foodStationId });
                if (foodStation) {
                    await deleteImageFromCloudinary(foodStation?.image);
                }
            }

            return await FoodStation.findByIdAndUpdate(foodStationId, formData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async createAddon(formData: IAddOn): Promise<IAddOn | null> {
        try {
            const newAddOn = new AddOn(formData);
            await newAddOn.save();
            return newAddOn;
        } catch (error) {
            throw error;
        }
    }

    async updateAddOnById(addonId: string, formData: IAddOn): Promise<IAddOn | null> {
        try {
            const addOnData: any = await AddOn.findOne({ _id: addonId });
            await deleteImageFromCloudinary(addOnData?.image);
            const res = await AddOn.findByIdAndUpdate(addonId, formData, { new: true });
            if (!res) throw new NotFoundError("The addon document not found");
            return res;
        } catch (error) {
            throw error;
        }
    }
    async deleteAddOn(addonId: string): Promise<IAddOn | null> {
        try {
            return await AddOn.findByIdAndDelete(addonId);
        } catch (error) {
            throw error;
        }
    }
    async findAllAddons(): Promise<IAddOn[] | null> {
        try {
            return await AddOn.find({}).sort({ _id: -1 });
        } catch (error) {
            throw error;
        }
    }
    async addOnChangeStatus(addonId: string): Promise<IAddOn | null> {
        try {
            return await AddOn.findByIdAndUpdate(
                { _id: addonId },
                [
                    {
                        $set: {
                            isActive: { $not: "$isActive" },
                        },
                    },
                ],
                { new: true }
            );
        } catch (error) {
            throw error;
        }
    }
}
