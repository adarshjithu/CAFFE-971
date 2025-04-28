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
exports.PackageRepository = void 0;
const packageModel_1 = require("../models/packageModel");
const baseRepository_1 = require("./baseRepository");
class PackageRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(packageModel_1.Package);
    }
    findAllPackages(page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield packageModel_1.Package.aggregate([{ $facet: { packages: [{ $match: {} }, { $skip: (parseInt(page) - 1) * 20 }, { $limit: 20 }, { $sort: { _id: -1 } }], packageCount: [{ $group: { _id: null, count: { $sum: 1 } } }] } }]);
                console.log(res);
                return res;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.PackageRepository = PackageRepository;
