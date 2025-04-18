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
       

    },
});
export const { addPackageAction } = packageSlice.actions;
export default packageSlice.reducer;
