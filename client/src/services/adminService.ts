import { baseUrl, erroHandler } from "../api/baseUrl";


export const addCategory = async (category: any) => {
    try {
        const response = await baseUrl.post("/admin/category", category, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

export const getCategories = async () => {
    try {
        const response = await baseUrl.get("/admin/categories");
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

export const deleteCategory = async (id: string) => {
    try {
        const response = await baseUrl.delete(`/admin/category?categoryId=${id}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateCategory = async (id: string, categoryData: any) => {
    try {
        const response = await baseUrl.put(`/admin/category?categoryId=${id}`, categoryData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateCategoryImage = async (id: string, image: any) => {
    try {
        const response = await baseUrl.patch(`/admin/category/categoryId=${id}`, { image: image });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

// ---------------------------------------Product-----------------------------------------
export const addProduct = async (product: any) => {
    try {
        const response = await baseUrl.post("/admin/product", product, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateProduct = async (product: any, productId: string) => {
    try {
        const response = await baseUrl.put(`/admin/product?productId=${productId}`, product, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const changeProductStatus = async (productId:string) => {
    try {
        const response = await baseUrl.patch(`/admin/product?productId=${productId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllProducts = async (filter:any,page:number) => {
    try {
        const response = await baseUrl.get(`/admin/products/${page}`,{params:filter});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const deleteProduct = async (productId: string) => {
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
export const getProductByFilter = async (category: string, filter: string, search: string) => {
    try {
        const response = await baseUrl.get(`/admin/package/products`, { params: { category, filter, search } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const createPackage = async (formData: any) => {
    try {
        const response = await baseUrl.post(`/admin/package`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllPackages = async () => {
    try {
        const response = await baseUrl.get(`/admin/packages`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const deletePackge = async (packageId: string) => {
    try {
        const response = await baseUrl.delete(`/admin/packages?packageId=${packageId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updatePackageStock = async (packageId: string, stock: boolean) => {
    try {
        const response = await baseUrl.patch(`/admin/package/stock?packageId=${packageId}&stock=${stock}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updatePackageImage = async (formData: any, packageId: string) => {
    try {
        const response = await baseUrl.patch(`/admin/package/image?packageId=${packageId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const categoryAndProducts = async (packageId: string, stock: boolean) => {
    try {
        const response = await baseUrl.patch(`/admin/package/stock?packageId=${packageId}&stock=${stock}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getFirstCategoryAndProducts = async (packageId: string) => {
    try {
        const response = await baseUrl.get(`/admin/package/category/products?packageId=${packageId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getProductsByPackageIdAndCategory = async (packageId: string, category: string) => {
    try {
        const response = await baseUrl.get(`/admin/package/productlist?packageId=${packageId}&category=${category}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const removeProductFromPackageCategory = async (packageId: string, category: string, productId: string) => {
    try {
        const response = await baseUrl.delete(`/admin/package/product?packageId=${packageId}&category=${category}&productId=${productId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const addProductFromPackageCategory = async (packageId: string, category: string, productId: string) => {
    try {
        const response = await baseUrl.patch(`/admin/package/product?packageId=${packageId}&category=${category}&productId=${productId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const editPackage = async (packageId: string, packageData: any) => {
    try {
        const response = await baseUrl.put(`/admin/package?packageId=${packageId}`, packageData);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

// Chairs-----------------------------------------------------------------------------
export const addChair = async (formData: any) => {
    try {
        const response = await baseUrl.post(`/admin/chair`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const deleteChair = async (chairId: string) => {
    try {
        const response = await baseUrl.delete(`/admin/chair?chairId=${chairId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateChair = async (chairId: string, formData: any) => {
    try {
        const response = await baseUrl.put(`/admin/chair?chairId=${chairId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllChairs = async () => {
    try {
        const response = await baseUrl.get(`/admin/chairs`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

// Table Routes-------------------------------------------------------------------------

export const addTable = async (formData: any) => {
    try {
        const response = await baseUrl.post(`/admin/table`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

export const deleteTable = async (tableId: string) => {
    try {
        const response = await baseUrl.delete(`/admin/table?tableId=${tableId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};


export const getAllTables = async () => {
    try {
        const response = await baseUrl.get(`/admin/tables`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateTable = async (tableId: string, formData: any) => {
    try {
        const response = await baseUrl.put(`/admin/table?tableId=${tableId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};


// Food Station-------------------------------------------------------------------------
export const addFoodStation = async (formData: any) => {
    try {
 
        const response = await baseUrl.post(`/admin/food-station`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const deleteFoodStation = async (foodStationId: string) => {
    try {
        const response = await baseUrl.delete(`/admin/food-station?foodStationId=${foodStationId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateFoodStation = async (foodStationId:string,formData: any) => {
    try {
        const response = await baseUrl.put(`/admin/food-station?foodStationId=${foodStationId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllFoodStation = async () => {
    try {
        const response = await baseUrl.get(`/admin/food-stations`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};

//Addons--------------------------------------------------------------------------------


export const createAddOn = async (formData:any) => {
    try {
        const response = await baseUrl.post(`/admin/addon`,formData,{headers:{"Content-Type":"multipart/form-data"}});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const updateAddOn = async (addonId:string,formData:any) => {
    try {
        const response = await baseUrl.put(`/admin/addon?addonId=${addonId}`,formData,{headers:{"Content-Type":"multipart/form-data"}});
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const deleteAddOn = async (addonId:string) => {
    try {
        const response = await baseUrl.delete(`/admin/addon?addonId=${addonId}`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};
export const getAllAddOnes = async () => {
    try {
        const response = await baseUrl.get(`/admin/addons`);
        return response;
    } catch (error) {
        return erroHandler(error);
    }
};