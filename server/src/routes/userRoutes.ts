import express from 'express'
import { PackageRepository } from '../repositories/packageRepository';
import { UserService } from '../services/userService';
import { UserController } from '../controllers/userController';

const userRouter = express.Router();

const packageRepository =  new PackageRepository();
const userService  = new UserService(packageRepository);
const controller =  new UserController(userService);

userRouter.get('/packages',(req,res,next)=>controller.getAllPackages(req,res,next))

export default userRouter;