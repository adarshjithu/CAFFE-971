import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/userService";
import { STATUS_CODES } from "../constants/statusCodes";
const { OK, CREATED } = STATUS_CODES;
export class UserController {
    constructor(private userService: UserService) {}

    // @desc   Get all packages
    // @route  GET /packages
    // @access User
    async getAllPackages(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.userService.getAllPackages(req.query.page as string);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get product by productId
    // @route  GET /product
    // @access User
    async getProductById(req: Request, res: Response, next: NextFunction) {
        try {
           
            const result = await this.userService.getProductsByPackageId(req?.query?.packageId as string);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
}
