import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/userService";
import { STATUS_CODES } from "../constants/statusCodes";
import { EmptyRequestBodyError } from "../constants/customErrors";
const { OK, CREATED } = STATUS_CODES;
export class UserController {
    constructor(private userService: UserService) {}

    // @desc   Get all packages
    // @route  GET /packages
    // @access User
    async getAllPackages(req: Request, res: Response, next: NextFunction) {
        try {
            if(Object.keys(req.query).length!==2) throw new EmptyRequestBodyError()
            const result = await this.userService.getAllPackages(req.query.page as string,req.query.search as string);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get products by packageId with single package info
    // @route  GET /product
    // @access User
    async getProductById(req: Request, res: Response, next: NextFunction) {
        try {
           
            const result = await this.userService.getPackagesById(req?.query?.packageId as string,req?.query?.category as string);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get products by packageId
    // @route  GET /package/products
    // @access User
    async getProductsByPackageId(req: Request, res: Response, next: NextFunction) {
    try {
           
            const result = await this.userService.getProductsByPackageId(req?.query?.packageId as string,req?.query?.category as string);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all addons 
    // @route  GET /addons
    // @access User
    async getAllAddons(req: Request, res: Response, next: NextFunction) {
        try {
           
            const result = await this.userService.getAllAddons();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all tables
    // @route  GET /tables
    // @access User
    async getAllTables(req: Request, res: Response, next: NextFunction) {
        try {
           
            const result = await this.userService.getAllTables();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all foodstations
    // @route  GET /food-stations
    // @access User
    async getFoodStations(req: Request, res: Response, next: NextFunction) {
        try {
           
            const result = await this.userService.getAllFoodStations();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
}
