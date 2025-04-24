"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRepository_1 = require("../repositories/adminRepository");
const adminService_1 = require("../services/adminService");
const adminController_1 = require("../controllers/adminController");
const upload_1 = __importDefault(require("../middewares.ts/upload"));
const adminRouter = express_1.default.Router();
const adminRepository = new adminRepository_1.AdminRepository();
const adminService = new adminService_1.AdminService(adminRepository);
const controller = new adminController_1.AdminController(adminService);
// Category Routes
adminRouter.post('/category', upload_1.default.any(), (req, res, next) => controller.addCategory(req, res, next));
adminRouter.get('/categories', (req, res, next) => controller.getCategory(req, res, next));
adminRouter.delete('/category', (req, res, next) => controller.deleteCategory(req, res, next));
adminRouter.put('/category', upload_1.default.any(), (req, res, next) => controller.updateCategory(req, res, next));
// Product Routes
adminRouter.post('/product', upload_1.default.any(), (req, res, next) => controller.addProduct(req, res, next));
adminRouter.get('/products/:page', (req, res, next) => controller.getProducts(req, res, next));
adminRouter.delete('/product', (req, res, next) => controller.deleteProduct(req, res, next));
adminRouter.put('/product', upload_1.default.any(), (req, res, next) => controller.updateProduct(req, res, next));
adminRouter.patch('/product', (req, res, next) => controller.updateProductStatus(req, res, next));
// Package Routes
adminRouter.get('/package/details', (req, res, next) => controller.getProductsAndCategory(req, res, next));
adminRouter.get('/package/products', (req, res, next) => controller.getProductsByfilter(req, res, next));
adminRouter.post('/package', upload_1.default.any(), (req, res, next) => controller.createPackage(req, res, next));
adminRouter.get('/packages', (req, res, next) => controller.getPackages(req, res, next));
adminRouter.get('/packages', (req, res, next) => controller.getPackages(req, res, next));
adminRouter.delete('/packages', (req, res, next) => controller.deletePackage(req, res, next));
adminRouter.patch('/package/stock', (req, res, next) => controller.updateStock(req, res, next));
adminRouter.patch('/package/image', upload_1.default.any(), (req, res, next) => controller.updatePackageImage(req, res, next));
adminRouter.get('/package/category/products', (req, res, next) => controller.getCategoryAndProducts(req, res, next));
adminRouter.get('/package/productlist', (req, res, next) => controller.getProductListForPackageEdit(req, res, next));
adminRouter.delete('/package/product', (req, res, next) => controller.deletePackageProduct(req, res, next));
adminRouter.patch('/package/product', (req, res, next) => controller.addPackageProduct(req, res, next));
adminRouter.put('/package', (req, res, next) => controller.editPackage(req, res, next));
// Chairs Routes
adminRouter.post('/chair', upload_1.default.any(), (req, res, next) => controller.createChair(req, res, next));
adminRouter.get('/chairs', (req, res, next) => controller.getAllChairs(req, res, next));
adminRouter.delete('/chair', (req, res, next) => controller.deleteChair(req, res, next));
adminRouter.put('/chair', upload_1.default.any(), (req, res, next) => controller.updateChair(req, res, next));
// Table Routes
adminRouter.post('/table', upload_1.default.any(), (req, res, next) => controller.createTable(req, res, next));
adminRouter.get('/tables', (req, res, next) => controller.getAllTables(req, res, next));
adminRouter.delete('/table', (req, res, next) => controller.deleteTable(req, res, next));
adminRouter.put('/table', upload_1.default.any(), (req, res, next) => controller.updateTable(req, res, next));
// Live Food Station Routes
adminRouter.post('/food-station', upload_1.default.any(), (req, res, next) => controller.createFoodStation(req, res, next));
adminRouter.delete('/food-station', (req, res, next) => controller.deleteFoodStation(req, res, next));
adminRouter.get('/food-stations', (req, res, next) => controller.getAllFoodStations(req, res, next));
adminRouter.put('/food-station', upload_1.default.any(), (req, res, next) => controller.updateFoodStation(req, res, next));
// AddOn Routes
adminRouter.post('/addon', upload_1.default.any(), (req, res, next) => controller.createAddOn(req, res, next));
adminRouter.put('/addon', upload_1.default.any(), (req, res, next) => controller.updateAddOn(req, res, next));
adminRouter.delete('/addon', (req, res, next) => controller.deleteAddOn(req, res, next));
adminRouter.get('/addons', (req, res, next) => controller.getAllAddons(req, res, next));
exports.default = adminRouter;
