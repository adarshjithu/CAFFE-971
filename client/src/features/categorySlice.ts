import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../interface/ICategory";

interface IInititalState{
    categories:ICategory[]
}
const initialState:IInititalState = {
    categories: [],
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategoryAction: (state, action) => {
            state.categories = action.payload;
        },
        createCategory:(state,action)=>{
            state.categories.unshift(action.payload)
        },
        deleteCategoryAction:(state,action)=>{
            state.categories=state.categories.filter((obj:ICategory)=>obj?._id!==action?.payload?._id);

        }

    },
});
export const {addCategoryAction,createCategory,deleteCategoryAction}=categorySlice.actions
export default categorySlice.reducer;

