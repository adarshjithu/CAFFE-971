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
const mongoose_1 = __importDefault(require("mongoose"));
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const packageModel_1 = require("../models/packageModel");
const productModel_1 = require("../models/productModel");
const deleteImageFromCloudinary_1 = require("../utils/cloudinary/deleteImageFromCloudinary");
const baseRepository_1 = require("./baseRepository");
const chairModel_1 = __importDefault(require("../models/chairModel"));
const customErrors_1 = require("../constants/customErrors");
const tableModel_1 = __importDefault(require("../models/tableModel"));
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
    getCategoryAndProducts(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                let products = [];
                const res = yield packageModel_1.Package.aggregate([
                    {
                        $facet: {
                            categories: [{ $match: { _id: new mongoose_1.default.Types.ObjectId(packageId) } }],
                        },
                    },
                ]);
                const categories = Object.keys(((_b = (_a = res[0]) === null || _a === void 0 ? void 0 : _a.categories[0]) === null || _b === void 0 ? void 0 : _b.products) || {});
                const firstCategoryProducts = (_d = (_c = res[0]) === null || _c === void 0 ? void 0 : _c.categories[0]) === null || _d === void 0 ? void 0 : _d.products[categories[0]];
                if (firstCategoryProducts && firstCategoryProducts.length > 0) {
                    const productlist = yield productModel_1.Product.find({ _id: { $in: firstCategoryProducts } });
                    products = productlist;
                }
                return { categories, products };
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllProductsByPackageCategory(query) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const res = yield packageModel_1.Package.aggregate([
                    {
                        $facet: {
                            categories: [{ $match: { _id: new mongoose_1.default.Types.ObjectId(query === null || query === void 0 ? void 0 : query.packageId) } }],
                        },
                    },
                ]);
                const products = (_a = res[0].categories[0]) === null || _a === void 0 ? void 0 : _a.products[query === null || query === void 0 ? void 0 : query.category];
                return yield productModel_1.Product.find({ _id: { $in: products } });
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteProductFromPackage(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category, packageId, productId } = query;
                const field = `products.${category}`;
                const res = yield packageModel_1.Package.updateOne({ _id: packageId }, { $pull: { [field]: productId } });
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    addProductInPackage(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category, packageId, productId } = query;
                const field = `products.${category}`;
                const res = yield packageModel_1.Package.updateOne({ _id: packageId }, { $addToSet: { [field]: productId } });
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updatePackageImage(packageId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield packageModel_1.Package.findByIdAndUpdate(packageId, { image: image }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    editPackage(packageId, packageData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield packageModel_1.Package.findByIdAndUpdate(packageId, packageData, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    createNewChair(formData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newChair = new chairModel_1.default(formData);
                yield newChair.save();
                return newChair;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllChairs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield chairModel_1.default.find().sort({ _id: -1 });
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteChairById(chairId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = yield chairModel_1.default.findOne({ _id: chairId });
                if (image)
                    yield (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(image.image);
                return yield chairModel_1.default.findByIdAndDelete(chairId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateChair(chairId, formData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (formData === null || formData === void 0 ? void 0 : formData.image) {
                    const chairData = yield chairModel_1.default.findOne({ _id: chairId });
                    if (chairData)
                        yield (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(chairData === null || chairData === void 0 ? void 0 : chairData.image);
                }
                const res = yield (chairModel_1.default === null || chairModel_1.default === void 0 ? void 0 : chairModel_1.default.findByIdAndUpdate(chairId, formData, { new: true }));
                if (!res)
                    throw new customErrors_1.NotFoundError('Already removed from the database');
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createTable(formData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(formData);
                const newTable = new tableModel_1.default(formData);
                yield newTable.save();
                return newTable;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield tableModel_1.default.find().sort({ _id: -1 });
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteTableById(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield tableModel_1.default.findByIdAndDelete(tableId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateTableById(tableId, formData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (formData === null || formData === void 0 ? void 0 : formData.image) {
                    const table = yield tableModel_1.default.findOne({ _id: tableId });
                    if (table)
                        yield (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(table === null || table === void 0 ? void 0 : table.image);
                }
                return yield (tableModel_1.default === null || tableModel_1.default === void 0 ? void 0 : tableModel_1.default.findByIdAndUpdate(tableId, formData, { new: true }));
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AdminRepository = AdminRepository;
