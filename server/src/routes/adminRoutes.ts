import express from "express";
import { AdminRepository } from "../repositories/adminRepository";
import { AdminService } from "../services/adminService";
import { AdminController } from "../controllers/adminController";
import upload from "../middewares.ts/upload";

const adminRouter = express.Router();

const adminRepository = new AdminRepository();
const adminService = new AdminService(adminRepository);
const controller = new AdminController(adminService);


adminRouter.post('/category',upload.any(),(req,res,next)=>controller.addCategory(req,res,next))
adminRouter.get('/categories',(req,res,next)=>controller.getCategory(req,res,next))
adminRouter.delete('/category',(req,res,next)=>controller.deleteCategory(req,res,next))
export default adminRouter;
