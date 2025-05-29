import express from 'express'
import { PackageRepository } from '../repositories/packageRepository';
import { UserService } from '../services/userService';
import { UserController } from '../controllers/userController';

const userRouter = express.Router();

const packageRepository =  new PackageRepository();
const userService  = new UserService(packageRepository);
const controller =  new UserController(userService);

userRouter.get('/packages',(req,res,next)=>controller.getAllPackages(req,res,next))
userRouter.get('/package',(req,res,next)=>controller.getProductById(req,res,next))
userRouter.get('/package/products',(req,res,next)=>controller.getProductsByPackageId(req,res,next))
userRouter.get('/addons',(req,res,next)=>controller.getAllAddons(req,res,next))
export default userRouter;