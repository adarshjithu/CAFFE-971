import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from '../features/categorySlice'
export interface IRootState{

    category:Record<string,any>;
}

export const store = configureStore({reducer:{
    
    category:categoryReducer
}})
