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
                const result = yield this.userService.getAllPackages();
                res.status(OK).json({ success: true, message: "", data: result });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
