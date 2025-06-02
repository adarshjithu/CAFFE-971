import axios from "axios";


export const baseUrl = axios.create({
    baseURL: "http://3.111.36.225:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const erroHandler = (error: any) => {

    if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError?.response?.data?.message) {
           return  Promise.reject(axiosError?.response?.data?.message);
        }
    }

     return Promise.reject("An enexpected error occured" as string);
};
