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
const addonModel_1 = __importDefault(require("../models/addonModel"));
const tableModel_1 = __importDefault(require("../models/tableModel"));
const foodStationModel_1 = __importDefault(require("../models/foodStationModel"));
class PackageRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(packageModel_1.Package);
    }
    findAllPackages(page, search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matchStage = search
                    ? { name: { $regex: search, $options: "i" } } // Case-insensitive name search
                    : {};
                const res = yield packageModel_1.Package.aggregate([
                    {
                        $facet: {
                            packages: [{ $match: matchStage }, { $limit: 10 * parseInt(page) }, { $sort: { _id: -1 } }],
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
    findPackageById(packageId, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageData = yield packageModel_1.Package.findOne({ _id: packageId });
                const categoryInfo = yield categoryModel_1.default.find();
                const products = packageData === null || packageData === void 0 ? void 0 : packageData.products;
                const categories = products.get(category);
                const productData = yield productModel_1.Product.find({ _id: { $in: categories } });
                return { products: productData, package: packageData, category: categoryInfo };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findProductsByPackageId(packageId, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageData = yield packageModel_1.Package.findOne({ _id: packageId });
                const products = packageData === null || packageData === void 0 ? void 0 : packageData.products;
                const categories = products.get(category);
                const productData = yield productModel_1.Product.find({ _id: { $in: categories } });
                return { products: productData };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllAddons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield addonModel_1.default.find();
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield tableModel_1.default.find();
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAllFoodStations() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield foodStationModel_1.default.find();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.PackageRepository = PackageRepository;
