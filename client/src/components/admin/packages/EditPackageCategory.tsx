import { useEffect, useState } from "react";

interface IPackage {
    packageId: string;
}

function EditPackageCategory({ packageId }: IPackage) {
    const [selectedTab, setSelectedTab] = useState("");
    const [categoryNames, setCategoryNames] = useState([]);
    const [categories, setCategories] = useState({});

    useEffect(() => {
      console.log(packageId)
    }, []);
    return (
        <div className="mt-6">
            <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Select Products</h3>

            {/* Category Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                {categoryNames?.map((obj: string) => {
                    return (
                        <button
                            type="button"
                            key={obj}
                            className={`py-2 px-4 font-medium text-sm ${
                                selectedTab === obj
                                    ? "text-[#4B164C] border-b-2 border-[#4B164C]"
                                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                            onClick={() => setSelectedTab(obj)}
                        >
                            {obj}
                        </button>
                    );
                })}
            </div>
            {/* Add Product Button */}
            <div className="col-span-2 flex justify-start py-4">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4B164C] hover:bg-[#3a0f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B164C] transition-colors duration-200"
                >
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Add Product
                </button>
            </div>
            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-2">
                {categories[selectedTab]?.map((product: any) => (
                    <div key={product?._id} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
                            <img src={product?.image} alt="Product" className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-3 flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{product?.name}</p>
                        </div>
                        <button type="button" className="ml-2 p-1 text-gray-400 hover:text-red-500 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EditPackageCategory;
