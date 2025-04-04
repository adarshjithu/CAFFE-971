import mongoose, { Schema } from "mongoose";
import { IPackage } from "../interface/Models/Package";


const cateringPackageSchema = new Schema<IPackage>(
    {
        name: { type: String, required: true},
        description: { type: String},
        price: { type: Number, required: true},
        mainCourse: [{ type: Schema.Types.ObjectId, ref: "Product"}],
        sides: [{ type: Schema.Types.ObjectId, ref: "Product"}],
        beverages: [{ type: Schema.Types.ObjectId, ref: "Product"}],
        accompaniments: [{ type: Schema.Types.ObjectId, ref: "Product"}]
    },
    { timestamps: true}
)

export const Package = mongoose.model<IPackage>("CateringPackage",cateringPackageSchema)