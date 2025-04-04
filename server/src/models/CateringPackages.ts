import mongoose, { Schema } from "mongoose";
import { ICateringPackage } from "../interface/ICateringPackages";

const cateringPackageSchema = new Schema<ICateringPackage>(
    {
        name: { type: String, required: true},
        description: { type: String},
        price: { type: Number, required: true},
        mainCourse: [{ type: Schema.Types.ObjectId, ref: "CateringProduct"}],
        sides: [{ type: Schema.Types.ObjectId, ref: "CateringProduct"}],
        beverages: [{ type: Schema.Types.ObjectId, ref: "CateringProduct"}],
        accompaniments: [{ type: Schema.Types.ObjectId, ref: "CateringProduct"}]
    },
    { timestamps: true}
)

export const CateringPackage = mongoose.model<ICateringPackage>("CateringPackage",cateringPackageSchema)