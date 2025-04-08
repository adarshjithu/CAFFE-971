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
const deleteImageFromCloudinary_1 = require("../utils/cloudinary/deleteImageFromCloudinary");
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
    updateCategory(categoryId, categoryData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (files.length > 0) {
                    const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                    if (!(images === null || images === void 0 ? void 0 : images.success))
                        throw new customErrors_1.BadRequestError("Failed to update category image");
                    const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                    const category = yield this.adminRepository.findCatgoryById(categoryId);
                    if (!category)
                        throw new customErrors_1.NotFoundError("Something went wrong");
                    yield (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(category === null || category === void 0 ? void 0 : category.image);
                    return yield this.adminRepository.findByIdAndUpdate(categoryId, { name: categoryData === null || categoryData === void 0 ? void 0 : categoryData.name, image: image });
                }
                else {
                    return yield this.adminRepository.findByIdAndUpdate(categoryId, { name: categoryData === null || categoryData === void 0 ? void 0 : categoryData.name });
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    addProduct(productData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!images.success)
                    throw new customErrors_1.BadRequestError("Product image faild to upload");
                const image = images.results[0].url;
                return yield this.adminRepository.createProduct(Object.assign(Object.assign({}, productData), { image: image }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findProducts();
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminRepository.deleteProductById(productId);
                if (!result)
                    throw new customErrors_1.NotFoundError("Failed to delete the product, Product not found");
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateProduct(productId, productData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (files.length > 0) {
                    const product = yield this.adminRepository.findProductById(productId);
                    if (!product)
                        throw new customErrors_1.NotFoundError("Product data not found in the database");
                    yield (0, deleteImageFromCloudinary_1.deleteImageFromCloudinary)(product === null || product === void 0 ? void 0 : product.image);
                    const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                    if (!(images === null || images === void 0 ? void 0 : images.success))
                        throw new customErrors_1.BadRequestError("Some error occured while uploading image to cloud server");
                    const image = (_a = images === null || images === void 0 ? void 0 : images.results[0]) === null || _a === void 0 ? void 0 : _a.url;
                    const newProductObj = Object.assign(Object.assign({}, productData), { image: image });
                    return yield this.adminRepository.findProductByIdAndUpdate(productId, newProductObj);
                }
                else {
                    console.log(productData, files);
                    return yield this.adminRepository.findProductByIdAndUpdate(productId, productData);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductsAndCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.getProductsAndCategory();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AdminService = AdminService;
