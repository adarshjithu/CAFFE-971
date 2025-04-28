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
    getProducts(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findProducts(filter);
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
    updateProductStatus(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.updateProductStatus(productId);
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
    getProductsByfilter(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findProductsByFiltering(query);
            }
            catch (error) {
                throw error;
            }
        });
    }
    createPackage(packages, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!images.success)
                    throw new customErrors_1.BadRequestError("Failed to upload package image");
                const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                const products = JSON.parse(packages === null || packages === void 0 ? void 0 : packages.products);
                const newPackage = Object.assign(Object.assign({}, packages), { products, image });
                return yield this.adminRepository.createPackage(newPackage);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllPackages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findAllPackages();
            }
            catch (error) {
                throw error;
            }
        });
    }
    deletePackage(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminRepository.findPackageByIdAndDelete(packageId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateStock(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.adminRepository.updateStock(query);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateImage(packageId, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!(images === null || images === void 0 ? void 0 : images.success))
                    throw new customErrors_1.BadRequestError("Failed to update package image");
                const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                return yield this.adminRepository.updatePackageImage(packageId, image);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getCategoryAndProducts(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.getCategoryAndProducts(packageId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllProductsByPackageCategory(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.getAllProductsByPackageCategory(query);
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteProductFromPackage(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.deleteProductFromPackage(query);
            }
            catch (error) {
                throw error;
            }
        });
    }
    addPackageProduct(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.addProductInPackage(query);
            }
            catch (error) {
                throw error;
            }
        });
    }
    editPackage(packageId, packageData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.editPackage(packageId, packageData);
            }
            catch (error) {
                throw error;
            }
        });
    }
    createChair(formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!(images === null || images === void 0 ? void 0 : images.success))
                    throw new customErrors_1.BadRequestError("Failed to upload chair image");
                const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                const newChairObj = Object.assign(Object.assign({}, formData), { image: image });
                return yield this.adminRepository.createNewChair(newChairObj);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllChairs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findAllChairs();
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteChair(chairId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.deleteChairById(chairId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateChair(chairId, formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
                    const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                    if (!(images === null || images === void 0 ? void 0 : images.success)) {
                        throw new customErrors_1.BadRequestError("Failed to upload image to cloud server, something went wrong");
                    }
                    const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                    const newChairObj = Object.assign(Object.assign({}, formData), { image: image });
                    return yield this.adminRepository.updateChair(chairId, newChairObj);
                }
                else {
                    return yield ((_a = this.adminRepository) === null || _a === void 0 ? void 0 : _a.updateChair(chairId, formData));
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    createTable(formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!(images === null || images === void 0 ? void 0 : images.success))
                    throw new customErrors_1.BadRequestError("Failed to upload image to the cloud server");
                const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                const newFormData = Object.assign(Object.assign({}, formData), { image: image });
                return yield this.adminRepository.createTable(newFormData);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findAllTables();
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteTable(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.deleteTableById(tableId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateTable(tableId, formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (files.length > 0) {
                    const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                    if (!(images === null || images === void 0 ? void 0 : images.success))
                        throw new customErrors_1.BadRequestError("Failed to upload image to cloud server");
                    const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                    console.log(image);
                    const newFormData = Object.assign(Object.assign({}, formData), { image: image });
                    return yield this.adminRepository.updateTableById(tableId, newFormData);
                }
                else {
                    return yield this.adminRepository.updateTableById(tableId, formData);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    createFoodStation(formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!(images === null || images === void 0 ? void 0 : images.success))
                    throw new customErrors_1.BadRequestError("Failed to upload food station image to cloud server");
                const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                return yield this.adminRepository.createNewFoodStation(Object.assign(Object.assign({}, formData), { image: image }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteFoodStation(foodStationId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findByIdAndDeleteFoodStation(foodStationId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllFoodStations() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.getAllFoodStations();
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateFoodStation(foodStationId, formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if ((files === null || files === void 0 ? void 0 : files.length) <= 0) {
                    return yield this.adminRepository.updateFoodStation(foodStationId, formData);
                }
                else {
                    const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                    if (!(images === null || images === void 0 ? void 0 : images.success)) {
                        throw new customErrors_1.BadRequestError("Failed to upload images to the cloud server");
                    }
                    const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                    const newFormData = Object.assign(Object.assign({}, formData), { image: image });
                    return yield this.adminRepository.updateFoodStation(foodStationId, newFormData);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    createAddOn(formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                if (!(images === null || images === void 0 ? void 0 : images.success))
                    throw new customErrors_1.BadRequestError('Failed to upload addon image to the cloud storage');
                const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                const newFormData = Object.assign(Object.assign({}, formData), { image: image, price: parseInt(formData === null || formData === void 0 ? void 0 : formData.price) });
                return yield this.adminRepository.createAddon(newFormData);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateAddon(addonId, formData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
                    const images = yield (0, uploadToCloudinary_1.uploadImageToCloudinary)(files);
                    if (!(images === null || images === void 0 ? void 0 : images.success))
                        throw new customErrors_1.BadRequestError('Failed to upload addon image to the cloud storage');
                    const image = images === null || images === void 0 ? void 0 : images.results[0].url;
                    const newAddOnObj = Object.assign(Object.assign({}, formData), { image: image });
                    return yield this.adminRepository.updateAddOnById(addonId, newAddOnObj);
                }
                else {
                    return yield this.adminRepository.updateAddOnById(addonId, formData);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteAddOn(addonId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.adminRepository.deleteAddOn(addonId);
                if (!res)
                    throw new customErrors_1.NotFoundError('Failed to remove the addon the document not found');
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllAddons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.findAllAddons();
            }
            catch (error) {
                throw error;
            }
        });
    }
    changeAddonStatus(addonId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.adminRepository.addOnChangeStatus(addonId);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AdminService = AdminService;
