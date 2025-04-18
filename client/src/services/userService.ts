
import { baseUrl, erroHandler } from "../api/baseUrl";


export const getAllPackages = async () => {
    try {
        const response = await baseUrl.get("/packages");
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};