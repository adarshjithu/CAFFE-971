import { createSlice } from "@reduxjs/toolkit";
import { IChair } from "../../interface/IChair";



interface IInititalState {
    chairs: IChair[];
}
const initialState: IInititalState = {
    chairs: [],
};

const chairSlice = createSlice({
    name: "chair",
    initialState,
    reducers: {
    createchairAction:(state,action)=>{
        state.chairs.unshift(action.payload);
    },addAllchairsAction:(state,action)=>{
         state.chairs = action.payload;
    },
    deletechairAction:(state,action)=>{
        state.chairs = state.chairs.filter((obj:IChair)=>obj?._id!==action?.payload?._id)
    },
    updateChairAction:(state,action)=>{
        state.chairs = state?.chairs.map((obj:IChair)=>{
            if(obj?._id==action?.payload?._id){
                return action.payload;
            }
            return obj;
        })
    }
    },
});
export const { createchairAction,addAllchairsAction,deletechairAction,updateChairAction} = chairSlice.actions;
export default chairSlice.reducer;
