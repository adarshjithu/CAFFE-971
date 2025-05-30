
import { baseUrl, erroHandler } from "../api/baseUrl";


export const getAllPackages = async (page:any,search:string) => {
    try {
        const response = await baseUrl.get(`/packages?page=${page}&search=${search}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getPackageById = async (proId:string,category:string) => {
    try {
        const response = await baseUrl.get(`/package?packageId=${proId}&category=${category}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const findProductsByPackageId = async (proId:string,category:string) => {
    try {
        const response = await baseUrl.get(`/package/products?packageId=${proId}&category=${category}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllAddons = async () => {
    try {
        const response = await baseUrl.get(`/addons`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllTables = async () => {
    try {
        const response = await baseUrl.get(`/tables`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

