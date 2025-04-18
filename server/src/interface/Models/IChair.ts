import { Document } from "mongoose";
export interface IChair extends Document {
    name: string;
    image: string;
    isActive: boolean;
}
