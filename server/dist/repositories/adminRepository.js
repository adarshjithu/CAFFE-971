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
const deleteImageFromCloudinary_1 = require("../utils/cloudinary/deleteImageFromCloudinary");
class AdminRepository {
    constructor() {
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
}
exports.AdminRepository = AdminRepository;
