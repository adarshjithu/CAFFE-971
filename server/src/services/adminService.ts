import { BadRequestError, NotFoundError } from "../constants/customErrors";
import { ICategory } from "../interface/Models/ICategory";
import { IProduct } from "../interface/Models/IProduct";
import { IPackage } from "../interface/Models/Package";
import Category from "../models/categoryModel";
import { AdminRepository } from "../repositories/adminRepository";
import { deleteImageFromCloudinary } from "../utils/cloudinary/deleteImageFromCloudinary";
import { uploadImageToCloudinary } from "../utils/cloudinary/uploadToCloudinary";

export class AdminService {
    constructor(private adminRepository: AdminRepository) {}

    async addCategory(files: any, name: string): Promise<ICategory | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images.success) throw new BadRequestError("Failed to upload category image ");
            const image = images.results[0].url;
            const categoryObj = { image, name };
            return await this.adminRepository.createCategory(categoryObj);
        } catch (error) {
            throw error;
        }
    }
    async getCategory(): Promise<ICategory[] | null> {
        try {
            const result = await this.adminRepository.findCategories();
            if (!result) throw new NotFoundError("No category datas found");
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteCategory(categoryId: string): Promise<ICategory | null> {
        try {
         
            return await this.adminRepository.findByIdAndDelete(categoryId);
        } catch (error) {
            throw error;
        }
    }
    async updateCategory(categoryId: string, categoryData: any, files: any): Promise<ICategory | null> {
        try {
            if (files.length > 0) {
                const images: any = await uploadImageToCloudinary(files);
                if (!images?.success) throw new BadRequestError("Failed to update category image");
                const image = images?.results[0].url;
                const category = await this.adminRepository.findCatgoryById(categoryId);
                if (!category) throw new NotFoundError("Something went wrong");
                await deleteImageFromCloudinary(category?.image);
                return await this.adminRepository.findByIdAndUpdate(categoryId, { name: categoryData?.name, image: image });
            } else {
                return await this.adminRepository.findByIdAndUpdate(categoryId, { name: categoryData?.name });
            }
        } catch (error) {
            throw error;
        }
    }

    async addProduct(productData: any, files: any): Promise<IProduct | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images.success) throw new BadRequestError("Product image faild to upload");
            const image = images.results[0].url;
            return await this.adminRepository.createProduct({ ...productData, image: image });
        } catch (error) {
            throw error;
        }
    }
    async getProducts(): Promise<IProduct[] | null> {
        try {
            return await this.adminRepository.findProducts();
        } catch (error) {
            throw error;
        }
    }
    async deleteProduct(productId: string): Promise<IProduct | null> {
        try {
            const result = await this.adminRepository.deleteProductById(productId);
            if (!result) throw new NotFoundError("Failed to delete the product, Product not found");
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateProduct(productId: string, productData: any, files: any): Promise<IProduct | null> {
        try {
            if (files.length > 0) {
                const product = await this.adminRepository.findProductById(productId);
                if (!product) throw new NotFoundError("Product data not found in the database");
                await deleteImageFromCloudinary(product?.image);
                const images: any = await uploadImageToCloudinary(files);
                if (!images?.success) throw new BadRequestError("Some error occured while uploading image to cloud server");
                const image = images?.results[0]?.url;
                const newProductObj = {
                    ...productData,
                    image: image,
                };

                return await this.adminRepository.findProductByIdAndUpdate(productId, newProductObj);
            } else {
                console.log(productData, files);
                return await this.adminRepository.findProductByIdAndUpdate(productId, productData);
            }
        } catch (error) {
            throw error;
        }
    }

    async getProductsAndCategory(): Promise<any | null> {
        try {
            return await this.adminRepository.getProductsAndCategory();
        } catch (error) {
            throw error;
        }
    }
    async getProductsByfilter(query: any): Promise<IProduct[] | null> {
        try {
            return await this.adminRepository.findProductsByFiltering(query);
        } catch (error) {
            throw error;
        }
    }
    async createPackage(packages: any, files: any): Promise<any | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images.success) throw new BadRequestError("Failed to upload package image");

            const image = images?.results[0].url;
            const products = JSON.parse(packages?.products);

            const newPackage =  {...packages,products,image};
            

            return await this.adminRepository.createPackage(newPackage);
        } catch (error) {
            throw error;
        }
    }


    async getAllPackages(): Promise<IPackage[] | null> {
        try {
            return await this.adminRepository.findAllPackages();
        } catch (error) {
            throw error;
        }
    }
    async deletePackage(packageId:string): Promise<any | null> {
        try {
             await this.adminRepository.findPackageByIdAndDelete(packageId)
         
        } catch (error) {
            throw error;
        }
    }
    async updateStock(query:any): Promise<any | null> {
        try {
             await this.adminRepository.updateStock(query)
            
        } catch (error) {
            throw error;
        }
    }
    async updateImage(packageId:string,files:any): Promise<any | null> {
        try {
            const images:any = await uploadImageToCloudinary(files);
            if(!images?.success) throw new BadRequestError("Failed to update package image");
            const image =  images?.results[0].url;
            return await this.adminRepository?.updatePackageImage(packageId,image)
            
        } catch (error) {
            throw error;
        }
    }
}
