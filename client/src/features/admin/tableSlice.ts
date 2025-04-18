import { createSlice } from "@reduxjs/toolkit";
import { ITable } from "../../interface/ITable";




interface IInititalState {
    tables: ITable[];
}
const initialState: IInititalState = {
    tables: [],
};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
    createtableAction:(state,action)=>{
        // state.tables.unshift(action.payload);
        console.log(action?.payload)
        state.tables
    },addAlltablesAction:(state,action)=>{
         state.tables = action.payload;
    },
    deletetableAction:(state,action)=>{
        state.tables = state.tables.filter((obj:ITable)=>obj?._id!==action?.payload?._id)
    },
    updatetableAction:(state,action)=>{
        state.tables = state?.tables.map((obj:ITable)=>{
            if(obj?._id==action?.payload?._id){
                return action.payload;
            }
            return obj;
        })
    }
    },
});
export const { createtableAction,addAlltablesAction,deletetableAction,updatetableAction} = tableSlice.actions;
export default tableSlice.reducer;
