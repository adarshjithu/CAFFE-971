"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const packageRepository_1 = require("../repositories/packageRepository");
const userService_1 = require("../services/userService");
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
const packageRepository = new packageRepository_1.PackageRepository();
const userService = new userService_1.UserService(packageRepository);
const controller = new userController_1.UserController(userService);
// Packages Routes
userRouter.get('/packages', (req, res, next) => controller.getAllPackages(req, res, next));
userRouter.get('/package', (req, res, next) => controller.getProductById(req, res, next));
userRouter.get('/package/products', (req, res, next) => controller.getProductsByPackageId(req, res, next));
// Addons Routes
userRouter.get('/addons', (req, res, next) => controller.getAllAddons(req, res, next));
// Tables Routes
userRouter.get('/tables', (req, res, next) => controller.getAllTables(req, res, next));
// Food Station
userRouter.get('/food-stations', (req, res, next) => controller.getFoodStations(req, res, next));
exports.default = userRouter;
