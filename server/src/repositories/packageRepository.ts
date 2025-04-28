import { IPackage } from "../interface/Models/Package";
import { Package } from "../models/packageModel";
import { BaseRepository } from "./baseRepository";

export class PackageRepository extends BaseRepository{
    constructor(){
        super(Package)
    }

   async findAllPackages(page:string):Promise<any|null>{
           try{
              const res =  await Package.aggregate([{$facet:{packages:[{$match:{}},{$skip:(parseInt(page)-1)*20},{$limit:20},{$sort:{_id:-1}}],packageCount:[{$group:{_id:null,count:{$sum:1}}}]}}])
              console.log(res);
              return res;
           }catch(error){
            throw error;
           }
    }
}