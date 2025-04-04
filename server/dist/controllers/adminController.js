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
                res.status(CREATED).json({ success: true, message: "New category successfully added", data: result });
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
                res.status(CREATED).json({ success: true, message: "Category successfully removed", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AdminController = AdminController;
