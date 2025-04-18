import { IPackage } from "../interface/Models/Package";
import { PackageRepository } from "../repositories/packageRepository";

export class UserService {
    constructor(private packageRepository:PackageRepository){

    }

    async getAllPackages():Promise<IPackage[]|null>{
         try{
          return  await  this.packageRepository.findAllPackages()
         }catch(error){
            throw error;
         }
    }
}