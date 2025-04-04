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
adminRouter.post('/category', upload_1.default.any(), (req, res, next) => controller.addCategory(req, res, next));
adminRouter.get('/categories', (req, res, next) => controller.getCategory(req, res, next));
adminRouter.delete('/category', (req, res, next) => controller.deleteCategory(req, res, next));
exports.default = adminRouter;
