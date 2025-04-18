import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/admin/categorySlice";
import productReducer from "../features/admin/productSlice";
import packageReducer from '../features/admin/packageSlice'
import productPackageReducer from  '../features/user/packageSlice'
import chairReducer from '../features/admin/chairSlice'
import tableReducer from '../features/admin/tableSlice'

export interface IRootState {
    category: Record<string, any>;
    product: Record<string, any>; 
    package: Record<string, any>; 
    productPackages:Record<string,any>;
    chair:Record<string,any>;
    table:Record<string,any>
}

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        package:packageReducer,
        productPackages:productPackageReducer,
        chair:chairReducer,
        table:tableReducer
    },
});
