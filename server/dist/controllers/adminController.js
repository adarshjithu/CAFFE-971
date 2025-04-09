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
exports.AdminController = void 0;
const customErrors_1 = require("../constants/customErrors");
const statusCodes_1 = require("../constants/statusCodes");
const { OK, CREATED } = statusCodes_1.STATUS_CODES;
class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    // @desc   Create New Category
    // @route  POST admin/cateogory
    // @access Admin
    addCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (((_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.length) == 0 || !req.body.name)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.addCategory(req.files, req.body.name);
                res.status(CREATED).json({ success: true, message: "New category successfully added", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get categories
    // @route  GET admin/cateogory
    // @access Admin
    getCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getCategory();
                res.status(OK).json({ success: true, message: "New category successfully added", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Delete category
    // @route  DELETE admin/cateogory
    // @access Admin
    deleteCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.deleteCategory(req.query.categoryId);
                res.status(OK).json({ success: true, message: "Category successfully removed", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Update category
    // @route  POST admin/category
    // @access Admin
    updateCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.updateCategory(req.query.categoryId, req.body, req.files);
                res.status(CREATED).json({ success: true, message: "Category successfully updated", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Add product
    // @route  POST admin/product
    // @access Admin
    addProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) == 0 || !req.body)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.addProduct(req.body, req.files);
                res.status(CREATED).json({ success: true, message: "New product successfully added", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get products
    // @route  GET admin/product
    // @access Admin
    getProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getProducts();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Delete product
    // @route  DELETE admin/product
    // @access Admin
    deleteProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(req === null || req === void 0 ? void 0 : req.query.productId))
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.deleteProduct(req.query.productId);
                res.status(OK).json({ success: true, message: "Product successfully deleted", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Update product
    // @route  PUT admin/product
    // @access Admin
    updateProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.productId))
                    throw new customErrors_1.EmptyRequestBodyError("Product ID required");
                const result = yield this.adminService.updateProduct(req.query.productId, req.body, req.files);
                res.status(OK).json({ success: true, message: "Product successfully deleted", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get package details
    // @route  GET admin/package/details
    // @access Admin
    getProductsAndCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getProductsAndCategory();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get products by filtering
    // @route  GET admin/package/products
    // @access Admin
    getProductsByfilter(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getProductsByfilter(req.query);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Create a new package
    // @route  POST admin/package
    // @access Admin
    createPackage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Object.keys(req.body).length == 0)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.createPackage(req.body, req.files);
                res.status(OK).json({ success: true, message: "New package successfully added", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get all packages
    // @route  GET admin/package
    // @access Admin
    getPackages(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getAllPackages();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get all packages
    // @route  GET admin/package
    // @access Admin
    deletePackage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const result = yield this.adminService.deletePackage((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.packageId);
                res.status(OK).json({ success: true, message: "Package successfuly deleted", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Update stock
    // @route  GET admin/package/stock
    // @access Admin
    updateStock(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.updateStock(req === null || req === void 0 ? void 0 : req.query);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Update package image
    // @route  GET admin/package/image
    // @access Admin
    updatePackageImage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.packageId))
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.updateImage((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.packageId, req.files);
                res.status(OK).json({ success: true, message: "Package image successfully updated", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AdminController = AdminController;
