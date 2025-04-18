import mongoose from "mongoose";
import { IChair } from "../interface/Models/IChair";

const chairSchema = new mongoose.Schema<IChair>(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const Chair = mongoose.model<IChair>("Chair", chairSchema);
export default Chair;
