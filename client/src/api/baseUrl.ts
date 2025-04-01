import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const erroHandler = (error: any) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError?.response?.data?.message) {
            Promise.reject(axiosError?.response?.data?.message);
        }
    }

    Promise.reject("An enexpected error occured" as string);
};
