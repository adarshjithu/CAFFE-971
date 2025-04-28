import { BadRequestError, NotFoundError } from "../constants/customErrors";
import { IAddOn } from "../interface/Models/IAddons";
import { ICategory } from "../interface/Models/ICategory";
import { IChair } from "../interface/Models/IChair";
import { IFoodStation } from "../interface/Models/IFoodStation";
import { IProduct } from "../interface/Models/IProduct";
import { ITable } from "../interface/Models/ITable";
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
    async getProducts(filter:any): Promise<IProduct[] | null> {
        try {
            return await this.adminRepository.findProducts(filter);
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
    async updateProductStatus(productId: string): Promise<IProduct | null> {
        try {
            return await this.adminRepository.updateProductStatus(productId)
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

            const newPackage = { ...packages, products, image };

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
    async deletePackage(packageId: string): Promise<any | null> {
        try {
            await this.adminRepository.findPackageByIdAndDelete(packageId);
        } catch (error) {
            throw error;
        }
    }
    async updateStock(query: any): Promise<any | null> {
        try {
            await this.adminRepository.updateStock(query);
        } catch (error) {
            throw error;
        }
    }
    async updateImage(packageId: string, files: any): Promise<any | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images?.success) throw new BadRequestError("Failed to update package image");
            const image = images?.results[0].url;
            return await this.adminRepository.updatePackageImage(packageId, image);
        } catch (error) {
            throw error;
        }
    }
    async getCategoryAndProducts(packageId: string): Promise<any | null> {
        try {
            return await this.adminRepository.getCategoryAndProducts(packageId);
        } catch (error) {
            throw error;
        }
    }
    async getAllProductsByPackageCategory(query: any): Promise<any | null> {
        try {
            return await this.adminRepository.getAllProductsByPackageCategory(query);
        } catch (error) {
            throw error;
        }
    }
    async deleteProductFromPackage(query: any): Promise<any | null> {
        try {
            return await this.adminRepository.deleteProductFromPackage(query);
        } catch (error) {
            throw error;
        }
    }
    async addPackageProduct(query: any): Promise<any | null> {
        try {
            return await this.adminRepository.addProductInPackage(query);
        } catch (error) {
            throw error;
        }
    }
    async editPackage(packageId: string, packageData: any): Promise<any | null> {
        try {
            return await this.adminRepository.editPackage(packageId, packageData);
        } catch (error) {
            throw error;
        }
    }
    async createChair(formData: IChair, files: any): Promise<IChair | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images?.success) throw new BadRequestError("Failed to upload chair image");
            const image = images?.results[0].url;
            const newChairObj = { ...formData, image: image };

            return await this.adminRepository.createNewChair(newChairObj);
        } catch (error) {
            throw error;
        }
    }
    async getAllChairs(): Promise<IChair[] | null> {
        try {
            return await this.adminRepository.findAllChairs();
        } catch (error) {
            throw error;
        }
    }
    async deleteChair(chairId: string): Promise<IChair | null> {
        try {
            return await this.adminRepository.deleteChairById(chairId);
        } catch (error) {
            throw error;
        }
    }
    async updateChair(chairId: string, formData: IChair, files: any): Promise<IChair | null> {
        try {
            if (files?.length > 0) {
                const images: any = await uploadImageToCloudinary(files);
                if (!images?.success) {
                    throw new BadRequestError("Failed to upload image to cloud server, something went wrong");
                }
                const image = images?.results[0].url;

                const newChairObj = { ...formData, image: image };

                return await this.adminRepository.updateChair(chairId, newChairObj);
            } else {
                return await this.adminRepository?.updateChair(chairId, formData);
            }
        } catch (error) {
            throw error;
        }
    }
    async createTable(formData: ITable, files: any): Promise<ITable | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images?.success) throw new BadRequestError("Failed to upload image to the cloud server");
            const image = images?.results[0].url;

            const newFormData = { ...formData, image: image };
            return await this.adminRepository.createTable(newFormData);
        } catch (error) {
            throw error;
        }
    }
    async getAllTables(): Promise<ITable[] | null> {
        try {
            return await this.adminRepository.findAllTables();
        } catch (error) {
            throw error;
        }
    }
    async deleteTable(tableId: string): Promise<ITable | null> {
        try {
            return await this.adminRepository.deleteTableById(tableId);
        } catch (error) {
            throw error;
        }
    }
    async updateTable(tableId: string, formData: ITable, files: any): Promise<ITable | null> {
        try {
            if (files.length > 0) {
                const images: any = await uploadImageToCloudinary(files);
                if (!images?.success) throw new BadRequestError("Failed to upload image to cloud server");
                const image = images?.results[0].url;
                console.log(image);
                const newFormData = { ...formData, image: image };
                return await this.adminRepository.updateTableById(tableId, newFormData);
            } else {
                return await this.adminRepository.updateTableById(tableId, formData);
            }
        } catch (error) {
            throw error;
        }
    }
    async createFoodStation(formData: IFoodStation, files: any): Promise<IFoodStation | null> {
        try {
            const images: any = await uploadImageToCloudinary(files);
            if (!images?.success) throw new BadRequestError("Failed to upload food station image to cloud server");

            const image = images?.results[0].url;

            return await this.adminRepository.createNewFoodStation({...formData,image:image});
        } catch (error) {
            throw error;
        }
    }
    async deleteFoodStation(foodStationId:string): Promise<IFoodStation | null> {
        try {
            return await this.adminRepository.findByIdAndDeleteFoodStation(foodStationId);
        } catch (error) {
            throw error;
        }
    }
    async getAllFoodStations(): Promise<IFoodStation []| null> {
        try {
            return await this.adminRepository.getAllFoodStations();
        } catch (error) {
            throw error;
        }
    }
    async updateFoodStation(foodStationId:string,formData:any,files:any): Promise<IFoodStation | null> {
        try {

            if(files?.length<=0){
                    return await this.adminRepository.updateFoodStation(foodStationId,formData);

            }else{
              const images:any = await uploadImageToCloudinary(files);
              if(!images?.success){
                throw new BadRequestError("Failed to upload images to the cloud server")
              }
              
              const image =  images?.results[0].url;
              const newFormData =  {...formData,image:image};
              return await this.adminRepository.updateFoodStation(foodStationId,newFormData);
            }

        } catch (error) {
            throw error;
        }
    }

    async createAddOn(formData:any,files:any): Promise<IAddOn | null> {
        try {
            const images:any = await uploadImageToCloudinary(files);
            if(!images?.success) throw new BadRequestError('Failed to upload addon image to the cloud storage');
            const image = images?.results[0].url;
            const newFormData={
                ...formData,image:image,price:parseInt(formData?.price)
            }

            return await this.adminRepository.createAddon(newFormData)
        } catch (error) {
            throw error;
        }
    }
    async updateAddon(addonId:string,formData:any,files:any): Promise<IAddOn | null> {
        try {
          if(files?.length>0){
            const images:any = await uploadImageToCloudinary(files);
            if(!images?.success) throw new BadRequestError('Failed to upload addon image to the cloud storage');
            const image = images?.results[0].url;
            const newAddOnObj={
                ...formData,image:image
            }
            return await this.adminRepository.updateAddOnById(addonId,newAddOnObj)
            
          }else{
            return await this.adminRepository.updateAddOnById(addonId,formData)
          }
        } catch (error) {
            throw error;
        }
    }
    async deleteAddOn(addonId:string): Promise<IAddOn | null> {
        try {
          const res = await this.adminRepository.deleteAddOn(addonId);
          if(!res) throw new NotFoundError('Failed to remove the addon the document not found');
          return res;
        } catch (error) {
            throw error;
        }
    }
    async getAllAddons(): Promise<IAddOn[] | null> {
        try {
          return await this.adminRepository.findAllAddons()
        } catch (error) {
            throw error;
        }
    }
    async changeAddonStatus(addonId:string): Promise<IAddOn | null> {
        try {
          return await this.adminRepository.addOnChangeStatus(addonId)
        } catch (error) {
            throw error;
        }
    }
}
