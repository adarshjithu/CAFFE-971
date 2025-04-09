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
            const result = await this.adminService.updateCategory(req.query.categoryId as string, req.body, req.files);
            res.status(CREATED).json({ success: true, message: "Category successfully updated", data: result });
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
            if (!req?.query?.productId) throw new EmptyRequestBodyError("Product ID required");
            const result = await this.adminService.updateProduct(req.query.productId as string, req.body, req.files);
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
    // @desc   Get products by filtering
    // @route  GET admin/package/products
    // @access Admin
    async getProductsByfilter(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.getProductsByfilter(req.query as { filter: string; category: string; search: string });
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Create a new package
    // @route  POST admin/package
    // @access Admin
    async createPackage(req: Request, res: Response, next: NextFunction) {
        try {
            if (Object.keys(req.body).length == 0) throw new EmptyRequestBodyError();
            const result = await this.adminService.createPackage(req.body, req.files);
            res.status(OK).json({ success: true, message: "New package successfully added", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all packages
    // @route  GET admin/package
    // @access Admin
    async getPackages(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.getAllPackages();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all packages
    // @route  GET admin/package
    // @access Admin
    async deletePackage(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.deletePackage(req?.query?.packageId as string);
            res.status(OK).json({ success: true, message: "Package successfuly deleted", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Update stock
    // @route  GET admin/package/stock
    // @access Admin
    async updateStock(req: Request, res: Response, next: NextFunction) {
        try {
            
            const result = await this.adminService.updateStock(req?.query);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Update package image
    // @route  GET admin/package/image
    // @access Admin
    async updatePackageImage(req: Request, res: Response, next: NextFunction) {
        try {

            if(!req?.query?.packageId) throw new EmptyRequestBodyError();

            
            const result = await this.adminService.updateImage(req?.query?.packageId as string,req.files);
            res.status(OK).json({ success: true, message: "Package image successfully updated", data: result });
        } catch (error) {
            next(error);
        }
    }
}
