import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`);
        console.log("Database connected successfully");
    } catch (error: any) {
        console.log(error.message as string);
    }
};
