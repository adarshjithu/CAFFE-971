import toast from "react-hot-toast";

interface PaginationProps {
    pageCount: number;
    setPage:any;
    page:number
  }
  
  function Pagination({ pageCount,setPage,page }: PaginationProps) {
  
    const pages = Array.from({ length: Math.ceil(pageCount/10)}, (_, i) => i + 1);
  
    return (
      <nav
        aria-label="Page navigation example"
        className="flex flex-col gap-4 mt-4 justify-center items-center"
      >
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a
                onClick={()=>{
                    if(page!==1){

                        setPage((prev:any)=>{
                           return prev+-1;
                        })
                    }else{
                        toast.error('Invalid page')
                    }
                  }}
              className=" cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
  
          {pages.map((num) => (
            <li key={num}>
              <a
                onClick={()=>setPage(num)}
                className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                  num === page // default selected page, can be changed or made stateful
                    ? "text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                aria-current={num === 1 ? "page" : undefined}
              >
                {num}
              </a>
            </li>
          ))}
  
          <li>
            <a
              onClick={()=>{
                if((page*10)>=pageCount){
                    toast.error('Invalid page')
                }else{

                    setPage((prev:any)=>{
                       return prev+1;
                    })
                }
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Pagination;
  