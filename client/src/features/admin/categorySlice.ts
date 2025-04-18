import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../interface/ICategory";

interface IInititalState {
    categories: ICategory[];
}
const initialState: IInititalState = {
    categories: [],
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategoryAction: (state, action) => {
            state.categories = action.payload;
        },
        createCategory: (state, action) => {
            state.categories.unshift(action.payload);
        },
        deleteCategoryAction: (state, action) => {
            state.categories = state.categories.filter((obj: ICategory) => obj?._id !== action?.payload?._id);
        },
        updateCategoryAction: (state, action) => {
            state.categories = state.categories.map((obj: ICategory) => {
                if (obj?._id == action?.payload?._id) {
                    return action?.payload;
                }
                return obj;
            });
        },
    },
});
export const { addCategoryAction, createCategory, deleteCategoryAction,updateCategoryAction } = categorySlice.actions;
export default categorySlice.reducer;
