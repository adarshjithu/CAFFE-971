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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const customErrors_1 = require("../constants/customErrors");
const uploadToCloudinary_1 = require("../utils/cloudinary/uploadToCloudinary");
class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    addCategory(files, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!images.success)
                    throw new customErrors_1.BadRequestError("Failed to upload category image ");
                const image = images.results[0].url;
                const categoryObj = { image, name };
                return yield this.adminRepository.createCategory(categoryObj);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminRepository.findCategories();
                if (!result)
                    throw new customErrors_1.NotFoundError("No category datas found");
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findByIdAndDelete(categoryId);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AdminService = AdminService;
