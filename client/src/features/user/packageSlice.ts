import { createSlice } from "@reduxjs/toolkit";
import { IPackage } from "../../interface/IPackage";

interface IInititalState {
    packages: IPackage[];
    totalPackage:number;
    pageCount:number
}
const initialState: IInititalState = {
    packages: [],
    pageCount:1,
    totalPackage:0
};

const packageSlice = createSlice({
    name: "Package",
    initialState,
    reducers: {
        addPackageAction: (state, action) => {
            state.packages = action.payload;
        },
        changePageCountAction:(state,action)=>{
            state.pageCount = action.payload
        },
        changePackageCountAction:(state,action)=>{
            state.totalPackage = action.payload
        }
       

    },
});
export const { addPackageAction ,changePageCountAction,changePackageCountAction} = packageSlice.actions;
export default packageSlice.reducer;
