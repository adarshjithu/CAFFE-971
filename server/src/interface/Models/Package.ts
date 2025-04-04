import { Document, ObjectId } from "mongoose";


export interface IPackage extends Document{
    name: string,
    description?: string,
    price: number,
    mainCourse: ObjectId[],
    sides: ObjectId[],
    beverages: ObjectId[],
    accompaniments: ObjectId[]
}