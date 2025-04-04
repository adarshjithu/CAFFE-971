export class BaseRepository{
    constructor(public Model:any){
        
    }

    async findByIdAndDelete(id:string){
        try{
            return await this.Model.findByIdAndDelete(id)

        }catch(error){
            throw error;
        }
    }
}