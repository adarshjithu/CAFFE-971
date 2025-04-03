import { ICateringProduct } from "./ICateringProduct";

export interface ICateringPackage extends Document{
    name: string,
    description?: string,
    price: number,
    mainCourse: ICateringProduct[],
    sides: ICateringProduct[],
    beverages: ICateringProduct[],
    accompaniments: ICateringProduct[]
}