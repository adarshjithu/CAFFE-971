import { NextFunction, Request, Response } from "express";
import { AdminService } from "../services/adminService";
import { BadRequestError, EmptyRequestBodyError } from "../constants/customErrors";
import { STATUS_CODES } from "../constants/statusCodes";

const { OK, CREATED } = STATUS_CODES;
export class AdminController {
    constructor(private adminService: AdminService) {}

    // @desc   Create New Category
    // @route  POST admin/cateogory
    // @access Admin
    async addCategory(req: Request, res: Response, next: NextFunction) {
        try {
            
            if (req?.files?.length == 0 || !req.body.name) throw new EmptyRequestBodyError();
            const result = await this.adminService.addCategory(req.files, req.body.name as string);
            res.status(CREATED).json({ success: true, message: "New category successfully added", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get categories
    // @route  GET admin/cateogory
    // @access Admin
    async getCategory(req: Request, res: Response, next: NextFunction) {
        try {
            
           
            const result = await this.adminService.getCategory();
            res.status(CREATED).json({ success: true, message: "New category successfully added", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Delete category
    // @route  DELETE admin/cateogory
    // @access Admin
    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        try {
            
           
            const result = await this.adminService.deleteCategory(req.query.categoryId as string);
            res.status(CREATED).json({ success: true, message: "Category successfully removed", data: result });
        } catch (error) {
            next(error);
        }
    }
}
