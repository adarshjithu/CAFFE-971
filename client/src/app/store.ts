import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import packageReducer from '../features/packageSlice'
export interface IRootState {
    category: Record<string, any>;
    product: Record<string, any>; 
    package: Record<string, any>; 
}

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        package:packageReducer
    },
});
