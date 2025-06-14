// Sever

import express from "express";
import http from "http";
import cors from 'cors'
import adminRouter from "./routes/adminRoutes";
import { errorHandler } from "./middewares.ts/errorHandler";
import userRouter from "./routes/userRoutes";
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);
app.use('/admin',adminRouter)
app.use('/',userRouter)
app.use(errorHandler)
export const Server = http.createServer(app);
