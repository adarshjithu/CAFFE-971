import { NextFunction, Request, Response } from "express";
import { AdminService } from "../services/adminService";
import { BadRequestError, EmptyRequestBodyError, NotFoundError } from "../constants/customErrors";
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
            if (!req?.query?.packageId) throw new EmptyRequestBodyError();

            const result = await this.adminService.updateImage(req?.query?.packageId as string, req.files);
            res.status(OK).json({ success: true, message: "Package image successfully updated", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all category and products for editing package
    // @route  GET admin/package/category/products
    // @access Admin
    async getCategoryAndProducts(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req?.query?.packageId) throw new EmptyRequestBodyError();
            const result = await this.adminService.getCategoryAndProducts(req?.query?.packageId as string);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get products list for package edit
    // @route  GET admin/package/productlist
    // @access Admin
    async getProductListForPackageEdit(req: Request, res: Response, next: NextFunction) {
        try {
            if (Object.keys(req.query).length !== 2) throw new EmptyRequestBodyError();
            const result = await this.adminService.getAllProductsByPackageCategory(req.query);
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Delete product from packages
    // @route  GET admin/package/product
    // @access Admin
    async deletePackageProduct(req: Request, res: Response, next: NextFunction) {
        try {
            if (Object.keys(req.query).length !== 3) throw new EmptyRequestBodyError();
            const result = await this.adminService.deleteProductFromPackage(req.query);
            res.status(OK).json({ success: true, message: "The product Successfully removed from the package", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   add product in packages
    // @route  PUT admin/package/product
    // @access Admin
    async addPackageProduct(req: Request, res: Response, next: NextFunction) {
        try {
            if (Object.keys(req.query).length !== 3) throw new EmptyRequestBodyError();
            const result = await this.adminService.addPackageProduct(req.query);
            res.status(OK).json({ success: true, message: "The product Successfully removed from the package", data: result });
        } catch (error) {
            next(error);
        }
    }

    // @desc   add product in packages
    // @route  PUT admin/package
    // @access Admin
    async editPackage(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.editPackage(req.query.packageId as string, req.body);
            res.status(OK).json({ success: true, message: "The  package data successfully updated", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Create Chair
    // @route  POST admin/chair
    // @access Admin
    async createChair(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.createChair(req.body, req.files);
            res.status(OK).json({ success: true, message: "New chair has been successfully added", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all chairs
    // @route  GET admin/chairs
    // @access Admin
    async getAllChairs(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.getAllChairs();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Delete chair
    // @route  DELETE admin/chairs
    // @access Admin
    async deleteChair(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req?.query?.chairId) throw new NotFoundError("Failed to delete the chair document, Chair Id not found");
            const result = await this.adminService.deleteChair(req?.query?.chairId as string);
            res.status(OK).json({ success: true, message: "The chair has been successfully deleted", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Update chair
    // @route  PUT admin/chair
    // @access Admin
    async updateChair(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req?.query?.chairId) throw new NotFoundError("Failed to delete the chair document, Chair Id not found");
            const result = await this.adminService.updateChair(req?.query?.chairId as string, req?.body, req.files);
            res.status(OK).json({ success: true, message: "The chair has been successfully updated", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Create table
    // @route  PUT admin/table
    // @access Admin
    async createTable(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.createTable(req.body, req.files);
            res.status(OK).json({ success: true, message: "The table has been successfully added", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Get all tables
    // @route  GET admin/tables
    // @access Admin
    async getAllTables(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.getAllTables();
            res.status(OK).json({ success: true, message: "", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Delete table
    // @route  DELETE admin/table
    // @access Admin
    async deleteTable(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.adminService.deleteTable(req?.query?.tableId as string);
            res.status(OK).json({ success: true, message: "Table has been deleted successfully", data: result });
        } catch (error) {
            next(error);
        }
    }
    // @desc   Update table
    // @route  PUT admin/table
    // @access Admin
    async updateTable(req: Request, res: Response, next: NextFunction) {
        try {
            if(!req?.query?.tableId) throw new NotFoundError("Table Id not found")
            const result = await this.adminService.updateTable(req?.query?.tableId as string,req?.body,req?.files);
            res.status(OK).json({ success: true, message: "Table has been updated successfully", data: result });
        } catch (error) {
            next(error);
        }
    }
}
