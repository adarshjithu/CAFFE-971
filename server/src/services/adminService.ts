import { BadRequestError, NotFoundError } from "../constants/customErrors";
import { ICategory } from "../interface/Models/ICategory";
import { AdminRepository } from "../repositories/adminRepository";
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
    async deleteCategory(categoryId:string): Promise<any | null> {
        try {
            return await this.adminRepository.findByIdAndDelete(categoryId)
        } catch (error) {
            throw error;
        }
    }
}
