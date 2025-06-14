import { IAddOn } from "../interface/Models/IAddons";
import { IFoodStation } from "../interface/Models/IFoodStation";
import { ITable } from "../interface/Models/ITable";
import { IPackage } from "../interface/Models/Package";
import { PackageRepository } from "../repositories/packageRepository";

export class UserService {
    constructor(private packageRepository:PackageRepository){

    }

    async getAllPackages(page:string,search:string):Promise<IPackage[]|null>{
         try{
          return  await  this.packageRepository.findAllPackages(page,search)
         }catch(error){
            throw error;
         }
    }
    async getPackagesById(packageId:string,category:string):Promise<IPackage[]|null>{
         try{
            return  await  this.packageRepository.findPackageById(packageId,category);
         }catch(error){
            throw error;
         }
      }
      async getProductsByPackageId(packageId:string,category:string):Promise<any|null>{
         try{
            return  await  this.packageRepository.findProductsByPackageId(packageId,category);
         }catch(error){
            throw error;
         }
    }
      async getAllAddons():Promise<IAddOn[]>{
         try{
            return  await  this.packageRepository.findAllAddons();
         }catch(error){
            throw error;
         }
    }
      async getAllTables():Promise<ITable[]>{
         try{
            return  await  this.packageRepository.findAllTables();
         }catch(error){
            throw error;
         }
    }
      async getAllFoodStations():Promise<IFoodStation[]>{
         try{
            return  await  this.packageRepository.findAllFoodStations();
         }catch(error){
            throw error;
         }
    }
}