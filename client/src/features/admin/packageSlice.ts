import { createSlice } from "@reduxjs/toolkit";
import { IPackage } from "../../interface/IPackage";

interface IInititalState {
    packages: IPackage[];
}
const initialState: IInititalState = {
    packages: [],
};

const packageSlice = createSlice({
    name: "Package",
    initialState,
    reducers: {
        addPackageAction: (state, action) => {
            state.packages = action.payload;
        },
        createPackageAction: (state, action) => {
            state.packages.unshift(action.payload);
        },
        deletePackageAction: (state, action) => {
            state.packages = state.packages.filter((obj: IPackage) => obj?._id !== action?.payload?._id);
        },
        updatePackageAction: (state, action) => {
            state.packages = state.packages.map((obj: IPackage) => {
                if (obj?._id == action?.payload?._id) {
                    return action?.payload;
                }
                return obj;
            });
        },
        updateStockAction:(state,action)=>{
            state.packages = state.packages.map((obj:any)=>{
                if(obj?._id==action.payload){
                    return {...obj,isActive:!obj?.isActive}
                }
                return obj;
            })

        },
        updateImageAction:(state,action)=>{
            state.packages = state.packages.map((obj:any)=>{
                if(obj?._id==action?.payload?._id){
                    return action?.payload;
                }
                return obj;
            })

        }
    },
});
export const { addPackageAction, updateImageAction,createPackageAction, deletePackageAction,updatePackageAction,updateStockAction } = packageSlice.actions;
export default packageSlice.reducer;
