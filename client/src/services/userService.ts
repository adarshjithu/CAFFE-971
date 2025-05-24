
import { baseUrl, erroHandler } from "../api/baseUrl";


export const getAllPackages = async (page:any) => {
    try {
        const response = await baseUrl.get(`/packages?page=${page}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getProductById = async (proId:string) => {
    try {
        const response = await baseUrl.get(`/product?packageId=${proId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

