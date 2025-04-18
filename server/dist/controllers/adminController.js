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
    // @desc   Get all category and products for editing package
    // @route  GET admin/package/category/products
    // @access Admin
    getCategoryAndProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.packageId))
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.getCategoryAndProducts((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.packageId);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get products list for package edit
    // @route  GET admin/package/productlist
    // @access Admin
    getProductListForPackageEdit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Object.keys(req.query).length !== 2)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.getAllProductsByPackageCategory(req.query);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Delete product from packages
    // @route  GET admin/package/product
    // @access Admin
    deletePackageProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Object.keys(req.query).length !== 3)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.deleteProductFromPackage(req.query);
                res.status(OK).json({ success: true, message: "The product Successfully removed from the package", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   add product in packages
    // @route  PUT admin/package/product
    // @access Admin
    addPackageProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Object.keys(req.query).length !== 3)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.adminService.addPackageProduct(req.query);
                res.status(OK).json({ success: true, message: "The product Successfully removed from the package", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   add product in packages
    // @route  PUT admin/package
    // @access Admin
    editPackage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.editPackage(req.query.packageId, req.body);
                res.status(OK).json({ success: true, message: "The  package data successfully updated", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Create Chair
    // @route  POST admin/chair
    // @access Admin
    createChair(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.createChair(req.body, req.files);
                res.status(OK).json({ success: true, message: "New chair has been successfully added", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get all chairs
    // @route  GET admin/chairs
    // @access Admin
    getAllChairs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getAllChairs();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Delete chair
    // @route  DELETE admin/chairs
    // @access Admin
    deleteChair(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.chairId))
                    throw new customErrors_1.NotFoundError("Failed to delete the chair document, Chair Id not found");
                const result = yield this.adminService.deleteChair((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.chairId);
                res.status(OK).json({ success: true, message: "The chair has been successfully deleted", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Update chair
    // @route  PUT admin/chair
    // @access Admin
    updateChair(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.chairId))
                    throw new customErrors_1.NotFoundError("Failed to delete the chair document, Chair Id not found");
                const result = yield this.adminService.updateChair((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.chairId, req === null || req === void 0 ? void 0 : req.body, req.files);
                res.status(OK).json({ success: true, message: "The chair has been successfully updated", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Create table
    // @route  PUT admin/table
    // @access Admin
    createTable(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.createTable(req.body, req.files);
                res.status(OK).json({ success: true, message: "The table has been successfully added", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get all tables
    // @route  GET admin/tables
    // @access Admin
    getAllTables(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminService.getAllTables();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Delete table
    // @route  DELETE admin/table
    // @access Admin
    deleteTable(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const result = yield this.adminService.deleteTable((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.tableId);
                res.status(OK).json({ success: true, message: "Table has been deleted successfully", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Update table
    // @route  PUT admin/table
    // @access Admin
    updateTable(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.tableId))
                    throw new customErrors_1.NotFoundError("Table Id not found");
                const result = yield this.adminService.updateTable((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.tableId, req === null || req === void 0 ? void 0 : req.body, req === null || req === void 0 ? void 0 : req.files);
                res.status(OK).json({ success: true, message: "Table has been updated successfully", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AdminController = AdminController;
