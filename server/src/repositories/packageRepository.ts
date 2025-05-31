import { StringExpressionOperatorReturningArray } from "mongoose";
import { IPackage } from "../interface/Models/Package";
import { Package } from "../models/packageModel";
import { BaseRepository } from "./baseRepository";
import { Product } from "../models/productModel";
import Category from "../models/categoryModel";
import { IAddOn } from "../interface/Models/IAddons";
import AddOn from "../models/addonModel";
import { ITable } from "../interface/Models/ITable";
import Table from "../models/tableModel";
import { IFoodStation } from "../interface/Models/IFoodStation";
import FoodStation from "../models/foodStationModel";

export class PackageRepository extends BaseRepository {
    constructor() {
        super(Package);
    }

    async findAllPackages(page: string, search: string): Promise<any | null> {
        try {
            const matchStage = search
                ? { name: { $regex: search, $options: "i" } } // Case-insensitive name search
                : {};
            const res = await Package.aggregate([
                {
                    $facet: {
                        packages: [{ $match: matchStage }, { $limit: 10 * parseInt(page) }, { $sort: { _id: -1 } }],
                        packageCount: [{ $group: { _id: null, count: { $sum: 1 } } }],
                    },
                },
            ]);

            return res;
        } catch (error) {
            throw error;
        }
    }
    async findPackageById(packageId: string, category: string): Promise<any | null> {
        try {
            const packageData = await Package.findOne({ _id: packageId });
            const categoryInfo = await Category.find()
            const products = packageData?.products;
            const categories = products.get(category);
            const productData = await Product.find({ _id: { $in: categories } });
            return { products: productData, package: packageData ,category:categoryInfo};
        } catch (error) {
            throw error;
        }
    }
    async findProductsByPackageId(packageId: string, category: string): Promise<any | null> {
        try {
            const packageData = await Package.findOne({ _id: packageId });
            const products = packageData?.products;
            const categories = products.get(category);
            const productData = await Product.find({ _id: { $in: categories } });
            return { products: productData };
        } catch (error) {
            throw error;
        }
    }

    async findAllAddons(): Promise<IAddOn[]> {
        try {
            return await AddOn.find();
        } catch (error) {
            throw error;
        }
    }
    async findAllTables(): Promise<ITable[]> {
        try {
            return await Table.find();
        } catch (error) {
            throw error;
        }
    }
    async findAllFoodStations(): Promise<IFoodStation[]> {
        try {
            return await FoodStation.find();
        } catch (error) {
            throw error;
        }
    }
}
