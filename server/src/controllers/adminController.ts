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
            res.status(OK).json({ success: true, message: "New category successfully added", data: result });
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
            res.status(OK).json({ success: true, message: "Category successfully removed", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Update category
    // @route  POST admin/category
    // @access Admin
    async updateCategory(req: Request, res: Response, next: NextFunction) {
        try {
            // const result = await this.adminService.updateCategory(req.query.categoryId as string, req.body, req.files);
            // res.status(CREATED).json({ success: true, message: "Category successfully updated", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Add product
    // @route  POST admin/product
    // @access Admin
    async addProduct(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.files?.length == 0 || !req.body) throw new EmptyRequestBodyError();
            const result = await this.adminService.addProduct(req.body, req.files);
            res.status(CREATED).json({ success: true, message: "New product successfully added", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get products
    // @route  GET admin/product
    // @access Admin
    async getProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.getProducts();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Delete product
    // @route  DELETE admin/product
    // @access Admin
    async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req?.query.productId) throw new EmptyRequestBodyError();
            const result = await this.adminService.deleteProduct(req.query.productId as string);
            res.status(OK).json({ success: true, message: "Product successfully deleted", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Update product
    // @route  PUT admin/product
    // @access Admin
    async updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
             if(!req?.query?.productId) throw new EmptyRequestBodyError("Product ID required")
             const result = await this.adminService.updateProduct(req.query.productId as string,req.body,req.files);
             res.status(OK).json({ success: true, message: "Product successfully deleted", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get package details
    // @route  GET admin/package/details
    // @access Admin
    async getProductsAndCategory(req: Request, res: Response, next: NextFunction) {
        try {
             
             const result = await this.adminService.getProductsAndCategory();
             res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
}
