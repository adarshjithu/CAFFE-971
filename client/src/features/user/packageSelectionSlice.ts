import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    packageData:{},
    mains: [],
    sidesAndBeverages: [],
    accompaniments: [],
    addons: [],
    tables:[],
    liveFoodStation:[]
};

const packageSelectionSlice = createSlice({
    name: "selectedPackageData",
    initialState,
    reducers: {
        setPackage: (state, action) => {
            state.packageData=action?.payload;
        },
        removePackage: (state, action) => {
            state.packageData = {}
        },
        setMain: (state, action) => {
            state?.mains.push(action?.payload);
        },
        removeFromMain: (state, action) => {
            state.mains = state?.mains.filter((id: any) => id?._id != action?.payload);
        },
        setSidesAndBeverages: (state, action) => {
            state.sidesAndBeverages.push(action?.payload);
        },
        removeFromSides: (state, action) => {
            state.sidesAndBeverages = state?.sidesAndBeverages.filter((id: any) => id?._id !== action?.payload);
        },

        setAccompaniments: (state, action) => {
            state.accompaniments.push(action?.payload);
        },
        removeFromAccompaniments: (state, action) => {
            state.accompaniments = state?.accompaniments.filter((id: any) => id?._id !== action?.payload);
        },
        setAddons: (state, action) => {
            state.addons.push(action?.payload);
        },
        removeAddon:(state,action)=>{
            state.addons = state?.addons.filter((data:any)=>data?._id!==action?.payload)
        },
        setTables:(state,action)=>{
            state.tables.push(action.payload)
        }
        ,
        removeTables:(state,action)=>{
            state.tables = state?.tables?.filter((data:any)=>data?._id!==action?.payload)
        },
        setLiveFoodStation:(state,action)=>{
            state.liveFoodStation.push(action.payload)
        }
        ,
        removeLiveFoodStation:(state,action)=>{
            state.liveFoodStation = state?.liveFoodStation?.filter((data:any)=>data?._id!==action?.payload)
        }
        ,
        resetPackageSelection: () => initialState,

    },
});

export const {setPackage,removePackage,setLiveFoodStation,removeLiveFoodStation,setTables,removeTables,setAddons,removeAddon, setMain, setSidesAndBeverages, setAccompaniments, resetPackageSelection, removeFromAccompaniments, removeFromMain, removeFromSides } =
    packageSelectionSlice.actions;

export default packageSelectionSlice.reducer;
