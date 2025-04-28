import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import { changePageCountAction } from "../../../features/user/packageSlice";
import toast from "react-hot-toast";



const Pagination = () => {
    const packageCount = useSelector((data: IRootState) => data?.productPackages?.totalPackage);
    const dispatch =  useDispatch();
    const page = useSelector((data: IRootState) => data?.productPackages?.pageCount);
    return (
        <div className="flex flex-col items-center mt-8">
            {/* Showing Text */}
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{page==1?1:(parseInt(page)-1)*20}</span> to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">{parseInt(page)*20>parseInt(packageCount)?packageCount:parseInt(page)*20}</span> of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">{packageCount}</span> Packages
            </span>

            {/* Pagination Buttons */}
            <div className="inline-flex mt-6">
                <button 
                onClick={()=>{
                    if(parseInt(page)<=1){
                  toast.error("Page limit exceeded")
                    }
                  else {
                 
                     dispatch(changePageCountAction(parseInt(page)-1))}
               }} className="flex items-center justify-center px-6 py-2 text-lg font-medium text-white bg-[#BD9455] rounded-l-lg hover:bg-[#a7814a] dark:bg-[#BD9455] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#a7814a] dark:hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed">
                    Prev
                </button>
                <button onClick={()=>{
                    if(parseInt(page)*20>=parseInt(packageCount)){
                        toast.error('Page limit exceeded')
                    }else{
                        
                        dispatch(changePageCountAction(parseInt(page)+1))
                    }
                }} className="flex items-center justify-center px-6 py-2 text-lg font-medium text-white bg-[#BD9455] border-0 border-l border-gray-700 rounded-r-lg hover:bg-[#a7814a] dark:bg-[#BD9455] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#a7814a] dark:hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
