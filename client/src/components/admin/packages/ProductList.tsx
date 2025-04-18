import { useEffect, useState } from "react";
import { addProductFromPackageCategory, getProductByFilter, getProductsAndCategory, removeProductFromPackageCategory } from "../../../services/adminService";
import { IProduct } from "../../../interface/IProduct";
import toast from "react-hot-toast";

interface IProps {
    selectedTab: string;
    productList: IProduct[];
    setProductListModal: any;
    setProductList: any;
    packageId:string
}

function ProductList({ packageId,selectedTab, productList, setProductListModal, setProductList }: IProps) {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const addProduct =async (product: IProduct) => {
        try{
            
            const res = await  addProductFromPackageCategory(packageId,selectedTab,product?._id)
              if(res?.data?.success){
 
                  setProductList((prev: any) => {
                      return prev.filter((obj: any) => obj?._id !== product?._id);
                  });
                  setProductList([...productList, product]);
              }
          }catch(error){
             toast.error(error as string)
          }
    };

    const removeProduct = async(product: IProduct) => {
         try{
            
           const res = await  removeProductFromPackageCategory(packageId,selectedTab,product?._id)
             if(res?.data?.success){

                 setProductList((prev: any) => {
                     return prev.filter((obj: any) => obj?._id !== product?._id);
                 });
             }
         }catch(error){
            toast.error(error as string)
         }

    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getProductByFilter(selectedTab, filter, search);
            setProducts(res?.data?.data);
        };
        fetchData();
    }, [filter, search, selectedTab]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                {/* Modal Header */}
                <div className="px-6 py-4 border-b flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">Add Products</h3>
                    <button onClick={() => setProductListModal(false)} className="text-gray-400 hover:text-gray-500">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Search and Filter Section */}
                <div className="p-4 border-b">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search Box */}
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search products..."
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#4B164C] focus:border-[#4B164C] sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Filter Options */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Filter:</span>
                            <div className="flex space-x-1 bg-gray-100 p-1 rounded-md">
                                <button
                                    onClick={() => setFilter("")}
                                    className={`${filter == "" && "bg-white"} px-3 py-1 text-xs rounded-md shadow text-gray-700`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setFilter("veg")}
                                    className={`${
                                        filter == "veg" && "bg-white"
                                    } px-3 py-1 text-xs rounded-md hover:bg-white hover:shadow text-gray-700`}
                                >
                                    Veg
                                </button>
                                <button
                                    onClick={() => setFilter("nonVeg")}
                                    className={`${
                                        filter == "nonVeg" && "bg-white"
                                    } px-3 py-1 text-xs rounded-md hover:bg-white hover:shadow text-gray-700`}
                                >
                                    Non-Veg
                                </button>
                                <button
                                    onClick={() => setFilter("none")}
                                    className={` ${
                                        filter == "none" && "bg-white"
                                    } px-3 py-1 text-xs rounded-md hover:bg-white hover:shadow text-gray-700`}
                                >
                                    Others
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Body - Product List */}
                <div className="p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products?.map((obj: IProduct) => {
                        return (
                            <div
                                key={obj?._id}
                                className="rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white"
                            >
                                {/* Image with tag */}
                                <div className="relative h-40 overflow-hidden rounded-t-xl bg-white">
                                    <img src={obj?.image} alt="Product" className="w-full h-full object-cover" />
                                    <span
                                        className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full
                                  ${
                                      obj?.type === "veg"
                                          ? "bg-green-100 text-green-800"
                                          : obj?.type === "nonVeg"
                                          ? "bg-red-100 text-red-800"
                                          : "bg-yellow-100 text-yellow-800"
                                  }`}
                                    >
                                        {obj?.type === "veg" ? "Veg" : obj?.type === "nonVeg" ? "Non-Veg" : "Others"}
                                    </span>
                                </div>

                                {/* Product Info */}
                                <div className="p-4 space-y-1">
                                    <h4 className="text-lg font-semibold text-gray-800 truncate">{obj?.name || "Unnamed Product"}</h4>
                                </div>

                                {/* Add/Remove Button */}
                                <div className="px-4 pb-4">
                                    {productList?.find((data: any) => data?._id == obj?._id) ? (
                                        <button
                                            onClick={() => removeProduct(obj)}
                                            className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                        >
                                            Remove
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => addProduct(obj)}
                                            className="w-full py-2 px-4 bg-[#4B164C] text-white rounded-lg hover:bg-[#3a0f3a] transition-colors"
                                        >
                                            Add
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {products?.length == 0 && <p className="text-sm text-gray-500 col-span-2 py-4 text-center">No Products Available</p>}

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t flex justify-end space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
