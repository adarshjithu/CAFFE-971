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
exports.PackageRepository = void 0;
const packageModel_1 = require("../models/packageModel");
const baseRepository_1 = require("./baseRepository");
const productModel_1 = require("../models/productModel");
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
class PackageRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(packageModel_1.Package);
    }
    findAllPackages(page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield packageModel_1.Package.aggregate([
                    {
                        $facet: {
                            packages: [{ $match: {} }, { $skip: (parseInt(page) - 1) * 20 }, { $limit: 20 }, { $sort: { _id: -1 } }],
                            packageCount: [{ $group: { _id: null, count: { $sum: 1 } } }],
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
    findPackageById(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageData = yield packageModel_1.Package.findById(packageId);
                const mainProducts = packageData === null || packageData === void 0 ? void 0 : packageData.products.get("Mains");
                const products = yield (productModel_1.Product === null || productModel_1.Product === void 0 ? void 0 : productModel_1.Product.find({ _id: { $in: mainProducts } }));
                const categoryData = [...packageData === null || packageData === void 0 ? void 0 : packageData.products.keys()];
                const categories = yield categoryModel_1.default.find({ name: { $in: categoryData } });
                return { products: products, categories: categories };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.PackageRepository = PackageRepository;
