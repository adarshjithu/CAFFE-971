import { StringExpressionOperatorReturningArray } from "mongoose";
import { IPackage } from "../interface/Models/Package";
import { Package } from "../models/packageModel";
import { BaseRepository } from "./baseRepository";
import { Product } from "../models/productModel";
import Category from "../models/categoryModel";

export class PackageRepository extends BaseRepository {
    constructor() {
        super(Package);
    }

    async findAllPackages(page: string): Promise<any | null> {
        try {
            const res = await Package.aggregate([
                {
                    $facet: {
                        packages: [{ $match: {} }, { $skip: (parseInt(page) - 1) * 20 }, { $limit: 20 }, { $sort: { _id: -1 } }],
                        packageCount: [{ $group: { _id: null, count: { $sum: 1 } } }],
                    },
                },
            ]);

            return res;
        } catch (error) {
            throw error;
        }
    }
    async findPackageById(packageId: string): Promise<any | null> {
        try {
            const packageData = await Package.findById(packageId);
            const mainProducts = packageData?.products.get("Mains");
            const products = await Product?.find({ _id: { $in: mainProducts } });
            const categoryData = [...packageData?.products.keys()];
            const categories = await Category.find({ name: { $in: categoryData } });

            return { products: products, categories: categories };
        } catch (error) {
            throw error;
        }
    }
}
