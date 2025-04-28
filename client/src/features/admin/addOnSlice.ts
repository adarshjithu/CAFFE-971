import { createSlice } from "@reduxjs/toolkit";

import { IAddOn } from "../../interface/IAddon";



interface IInititalState {
    addons: IAddOn[];
}
const initialState: IInititalState = {
    addons: [],
};

const addonSlice = createSlice({
    name: "addon",
    initialState,
    reducers: {
    createaddonAction:(state,action)=>{
        state.addons.unshift(action.payload);
    },addAlladdonsAction:(state,action)=>{
         state.addons = action.payload;
    },
    deleteaddonAction:(state,action)=>{
        state.addons = state.addons.filter((obj:IAddOn)=>obj?._id!==action?.payload?._id)
    },
    updateaddonAction:(state,action)=>{
        state.addons = state?.addons.map((obj:IAddOn)=>{
            if(obj?._id==action?.payload?._id){
                return action.payload;
            }
            return obj;
        })
    },
    addonChangeStatusAction:(state,action)=>{
     state.addons = state.addons.map((obj:IAddOn)=>{
        if(obj?._id==action.payload){
            return {...obj,isActive:!obj?.isActive}
        }
        return obj;
     })
    }
    },
});
export const { createaddonAction,addAlladdonsAction,deleteaddonAction,updateaddonAction,addonChangeStatusAction} = addonSlice.actions;
export default addonSlice.reducer;
