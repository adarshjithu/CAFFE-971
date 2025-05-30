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
exports.UserController = void 0;
const statusCodes_1 = require("../constants/statusCodes");
const customErrors_1 = require("../constants/customErrors");
const { OK, CREATED } = statusCodes_1.STATUS_CODES;
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    // @desc   Get all packages
    // @route  GET /packages
    // @access User
    getAllPackages(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Object.keys(req.query).length !== 2)
                    throw new customErrors_1.EmptyRequestBodyError();
                const result = yield this.userService.getAllPackages(req.query.page, req.query.search);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get products by packageId with single package info
    // @route  GET /product
    // @access User
    getProductById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const result = yield this.userService.getPackagesById((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.packageId, (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.category);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get products by packageId
    // @route  GET /package/products
    // @access User
    getProductsByPackageId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const result = yield this.userService.getProductsByPackageId((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.packageId, (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.category);
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get all addons 
    // @route  GET /addons
    // @access User
    getAllAddons(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userService.getAllAddons();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // @desc   Get all tables
    // @route  GET /tables
    // @access User
    getAllTables(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userService.getAllTables();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
