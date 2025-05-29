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
exports.UserService = void 0;
class UserService {
    constructor(packageRepository) {
        this.packageRepository = packageRepository;
    }
    getAllPackages(page, search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.packageRepository.findAllPackages(page, search);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getPackagesById(packageId, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.packageRepository.findPackageById(packageId, category);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductsByPackageId(packageId, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.packageRepository.findProductsByPackageId(packageId, category);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllAddons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.packageRepository.findAllAddons();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
