import { Server } from "./app";
import dotenv from 'dotenv'
import { connectDb } from "./config/db";
dotenv.config() 
connectDb()
Server.listen(4000, () => console.log("Server Connected Successfully"));

