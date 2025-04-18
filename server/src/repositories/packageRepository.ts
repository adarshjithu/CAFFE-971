import { IPackage } from "../interface/Models/Package";
import { Package } from "../models/packageModel";
import { BaseRepository } from "./baseRepository";

export class PackageRepository extends BaseRepository{
    constructor(){
        super(Package)
    }

   async findAllPackages():Promise<IPackage[]|null>{
           try{
              return await Package.find({isActive:true})
           }catch(error){
            throw error;
           }
    }
}