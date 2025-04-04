import express from "express";
import http from "http";
import cors from 'cors'
import adminRouter from "./routes/adminRoutes";
import { errorHandler } from "./middewares.ts/errorHandler";
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173","http://localhost:5173",'http://127.0.0.1:5500'],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);
app.use('/admin',adminRouter)
app.use(errorHandler)
export const Server = http.createServer(app);
