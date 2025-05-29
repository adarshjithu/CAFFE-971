import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    mains: [],
    sidesAndBeverages: [],
    accompaniments: [],
};

const packageSelectionSlice = createSlice({
    name: "selectedPackageData",
    initialState,
    reducers: {
        setMain: (state, action) => {
            state?.mains.push(action?.payload);
        },
        removeFromMain: (state, action) => {
            state.mains = state?.mains.filter((id: string) => id != action?.payload);
        },
        setSidesAndBeverages: (state, action) => {
            state.sidesAndBeverages.push(action?.payload);
        },
        removeFromSides: (state, action) => {
            state.sidesAndBeverages = state?.sidesAndBeverages.filter((id: string) => id !== action?.payload);
        },

        setAccompaniments: (state, action) => {
            state.accompaniments.push(action?.payload);
        },
        removeFromAccompaniments: (state, action) => {
         state.accompaniments =    state?.accompaniments.filter((id: string) => id !== action?.payload);
        },
        resetPackageSelection: () => initialState,
    },
});

export const { setMain, setSidesAndBeverages, setAccompaniments, resetPackageSelection, removeFromAccompaniments, removeFromMain, removeFromSides } =
    packageSelectionSlice.actions;

export default packageSelectionSlice.reducer;
