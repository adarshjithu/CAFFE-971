
import { baseUrl, erroHandler } from "../api/baseUrl";
import { ICategory } from "../interface/ICategory";

export const addCategory = async (category:any) => {
    try {
        const response = await baseUrl.post("/admin/category",category,{headers:{'Content-Type':"multipart/form-data"}});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};


export const getCategories = async () => {
    try {
        const response = await baseUrl.get("/admin/categories",);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};


export const deleteCategory = async (id:string) => {
    try {
        const response = await baseUrl.delete(`/admin/category?categoryId=${id}`,);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateCategory = async (id:string,categoryData:Partial<ICategory>) => {
    try {
        const response = await baseUrl.put(`/admin/category/categoryId=${id}`,categoryData);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateCategoryImage = async (id:string,image:any) => {
    try {
        const response = await baseUrl.patch(`/admin/category/categoryId=${id}`,{image:image});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};