import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";

export interface IRootState {
    category: Record<string, any>;
    product: Record<string, any>;
}

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
    },
});
