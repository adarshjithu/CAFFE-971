

export const findProductCount = (arg:any)=>{
    let count = 0;
      for(let i in arg){
          count+=arg[i].length
      }

      return count;
}