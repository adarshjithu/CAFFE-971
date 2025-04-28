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
userRouter.get('/packages', (req, res, next) => controller.getAllPackages(req, res, next));
userRouter.get('/product', (req, res, next) => controller.getProductById(req, res, next));
exports.default = userRouter;
