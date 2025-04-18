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
            const result = await this.userService.getAllPackages();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
}
