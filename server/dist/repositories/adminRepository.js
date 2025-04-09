"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const packageModel_1 = require("../models/packageModel");
const productModel_1 = require("../models/productModel");
const deleteImageFromCloudinary_1 = require("../utils/cloudinary/deleteImageFromCloudinary");
const baseRepository_1 = require("./baseRepository");
class AdminRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(null);
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCategory = new categoryModel_1.default(category);
                yield newCategory.save();
                return newCategory;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield categoryModel_1.default.find({}).sort({ _id: -1 }).lean();
            }
            catch (error) {
                throw error;
            }
        });
    }
    findByIdAndDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categoryModel_1.default.findByIdAndDelete(id);
                if (res === null || res === void 0 ? void 0 : res.image)
                    (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(res === null || res === void 0 ? void 0 : res.image);
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findByIdAndUpdate(categoryId, categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categoryModel_1.default.findByIdAndUpdate(categoryId, categoryData, { new: true });
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findCatgoryById(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categoryModel_1.default.findById(categoryId);
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createProduct(productObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = new productModel_1.Product(productObj);
                yield newProduct.save();
                return yield (newProduct === null || newProduct === void 0 ? void 0 : newProduct.populate("category"));
            }
            catch (error) {
                throw error;
            }
        });
    }
    findProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productModel_1.Product.find().sort({ _id: -1 }).populate("category");
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productModel_1.Product.findByIdAndDelete(productId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productModel_1.Product.findById(productId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findProductByIdAndUpdate(productId, productObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedProduct = yield productModel_1.Product.findByIdAndUpdate(productId, productObj, { new: true });
                return yield (updatedProduct === null || updatedProduct === void 0 ? void 0 : updatedProduct.populate("category"));
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductsAndCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productModel_1.Product.find({});
                const category = yield categoryModel_1.default.distinct("name");
                return { products, category };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findProductsByFiltering(_a) {
        return __awaiter(this, arguments, void 0, function* ({ search, filter, category }) {
            try {
                const res = yield productModel_1.Product.aggregate([
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
            }
            catch (error) {
                throw error;
            }
        });
    }
    createPackage(packages) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPackage = new packageModel_1.Package(packages);
                yield newPackage.save();
                return newPackage;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllPackages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield packageModel_1.Package.find({}).sort({ _id: -1 });
            }
            catch (error) {
                throw error;
            }
        });
    }
    findPackageByIdAndDelete(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield packageModel_1.Package.findByIdAndDelete(packageId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateStock(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield packageModel_1.Package.updateOne({ _id: query === null || query === void 0 ? void 0 : query.packageId }, { $set: { isActive: (query === null || query === void 0 ? void 0 : query.stock) == "true" ? true : false } });
            }
            catch (error) {
                throw error;
            }
        });
    }
    updatePackageImage(packageId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageData = yield packageModel_1.Package.findById(packageId);
                if (packageData)
                    yield (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(packageData === null || packageData === void 0 ? void 0 : packageData.image);
                return yield packageModel_1.Package.findByIdAndUpdate(packageId, { image: image }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AdminRepository = AdminRepository;
