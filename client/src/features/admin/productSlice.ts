import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/IProduct";


interface IInititalState {
    products: IProduct[];
}
const initialState: IInititalState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    createProductAction:(state,action)=>{
        state.products.unshift(action.payload);
    },addAllProductsAction:(state,action)=>{
         state.products = action.payload;
    },
    deleteProductAction:(state,action)=>{
        state.products = state.products.filter((obj:IProduct)=>obj?._id!==action?.payload?._id)
    },
    changeStatusAction:(state,action)=>{
        state.products = state.products?.map((obj:any)=>{
            if(obj?._id==action?.payload?._id){
                return {...obj,isActive:!obj?.isActive}
            }
            return obj;
        })

    }
    },
});
export const { createProductAction,addAllProductsAction,deleteProductAction,changeStatusAction} = productSlice.actions;
export default productSlice.reducer;
