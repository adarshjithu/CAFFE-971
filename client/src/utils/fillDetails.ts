import { IAddOn } from "../interface/IAddon";

 export  const findAddonsPrice = (data: IAddOn[]) => {
        let sum = 0;
        for (let i of data) {
            sum += parseInt(i?.price);
        }
        return sum;
    };