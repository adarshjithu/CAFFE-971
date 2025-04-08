
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
export const updateCategory = async (id:string,categoryData:any) => {
    try {
        const response = await baseUrl.put(`/admin/category?categoryId=${id}`,categoryData,{headers:{"Content-Type":"multipart/form-data"}});
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



// ---------------------------------------Product-----------------------------------------
export const addProduct = async (product:any) => {
    try {
        const response = await baseUrl.post("/admin/product",product,{headers:{'Content-Type':"multipart/form-data"}});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateProduct = async (product:any,productId:string) => {
    try {
        const response = await baseUrl.put(`/admin/product?productId=${productId}`,product,{headers:{'Content-Type':"multipart/form-data"}});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllProducts = async () => {
    try {
        const response = await baseUrl.get("/admin/products");
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const deleteProduct = async (productId:string) => {
    try {
        
        const response = await baseUrl.delete(`/admin/product?productId=${productId}`);
        return response;                       
    } catch (error) {
        return erroHandler(error);    
    }
};

// ---------------------------------------Packages-----------------------------------------


export const getProductsAndCategory = async () => {
    try {
        
        const response = await baseUrl.get(`/admin/package/details`);
        return response;                       
    } catch (error) {
        return erroHandler(error);    
    }
};
