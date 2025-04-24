import { createSlice } from "@reduxjs/toolkit";
import { IFoodStation } from "../../interface/IFoodStation";




interface IInititalState {
    foodStations: IFoodStation[];
}
const initialState: IInititalState = {
    foodStations: [],
};

const foodStationSlice = createSlice({
    name: "foodStation",
    initialState,
    reducers: {
    createfoodStationAction:(state,action)=>{
        state.foodStations.unshift(action.payload);
    },addAllfoodStationsAction:(state,action)=>{
         state.foodStations = action.payload;
    },
    deletefoodStationAction:(state,action)=>{
        state.foodStations = state.foodStations.filter((obj:IFoodStation)=>obj?._id!==action?.payload?._id)
    },
    updatefoodStationAction:(state,action)=>{
        state.foodStations = state?.foodStations.map((obj:IFoodStation)=>{
            if(obj?._id==action?.payload?._id){
                return action.payload;
            }
            return obj;
        })
    }
    },
});
export const { createfoodStationAction,addAllfoodStationsAction,deletefoodStationAction,updatefoodStationAction} = foodStationSlice.actions;
export default foodStationSlice.reducer;
