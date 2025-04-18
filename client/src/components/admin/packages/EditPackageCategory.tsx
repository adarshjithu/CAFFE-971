import { useEffect, useState } from "react";
import { getFirstCategoryAndProducts, getProductsByPackageIdAndCategory, removeProductFromPackageCategory } from "../../../services/adminService";
import { IProduct } from "../../../interface/IProduct";

import DeleteModal from "../../ui/modal/DeleteModal";
import ProductList from "./ProductList";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addPackageAction } from "../../../features/admin/packageSlice";
import { IRootState } from "../../../app/store";

function EditPackageCategoryModal({ packageId, setCategoryModal }: any) {
    const [categoryNames, setCategoryNames] = useState([]);
    const [selectedTab, setselectedTab] = useState("");
    const [products, setProducts] = useState<IProduct[]>([]);
    const [initialLoad, setInitialLoad] = useState(true);
    const [product, setProduct] = useState<IProduct>();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productListModal, setProductListModal] = useState(false);
    const packages = useSelector((data: IRootState) => data?.package?.packages);
    const dispatch = useDispatch();
    const handleDelete = async (arg: boolean) => {
        if (!arg) setIsDeleteModalOpen(false);
        else {
            try {
                const res = await removeProductFromPackageCategory(packageId, selectedTab, product?._id);
                if (res?.data?.data?.modifiedCount == 1) {
                    toast.success(res?.data?.message);
                    setProducts((prev) => {
                        return prev?.filter((obj: any) => obj?._id !== product?._id);
                    });
                    setIsDeleteModalOpen(false);
                    const newPackages = packages?.map((pkg: any) => {
                        if (pkg?._id === packageId) {
                            const updatedCategoryProducts = pkg?.products[selectedTab]?.filter((prodId: any) => prodId !== product?._id);

                            return {
                                ...pkg,
                                products: {
                                    ...pkg.products,
                                    [selectedTab]: updatedCategoryProducts,
                                },
                            };
                        }
                        return pkg;
                    });

                    dispatch(addPackageAction(newPackages));
                }
            } catch (error) {
                toast.error(error as string);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (packageId) {
                const res = await getFirstCategoryAndProducts(packageId);
                setselectedTab(res?.data?.data?.categories[0]);
                setCategoryNames(res?.data?.data?.categories);
                setProducts(res?.data?.data?.products);
                setInitialLoad(false);
            }
        };

        fetchData();

        return () => {
            setInitialLoad(true);
        };
    }, [packageId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!initialLoad) {
                    const res = await getProductsByPackageIdAndCategory(packageId, selectedTab);
                    setProducts(res?.data?.data);
                }
            } catch (error) {
                toast.error(error as string);
            }
        };

        fetchData();
    }, [selectedTab]);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {productListModal && (
                <ProductList
                    packageId={packageId}
                    selectedTab={selectedTab}
                    productList={products}
                    setProductListModal={setProductListModal}
                    setProductList={setProducts}
                />
            )}
            <DeleteModal handleDelete={handleDelete} text={`Product from ${selectedTab} `} isDeleteModalOpen={isDeleteModalOpen} />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Edit Package Categories</h2>

                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                    {categoryNames.map((category) => (
                        <button
                            type="button"
                            key={category}
                            onClick={() => setselectedTab(category)}
                            className={`py-2 px-4 font-medium text-sm border-b-2 transition-all duration-200 ${
                                selectedTab === category
                                    ? "text-[#4B164C] border-[#4B164C] dark:text-white"
                                    : "text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Add Product Button */}
                <div className="flex justify-start py-4">
                    <button
                        onClick={() => setProductListModal(true)}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4B164C] hover:bg-[#3a0f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B164C] transition-colors duration-200"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
                    {products?.map((obj: any, index: number) => (
                        <div key={obj?._id} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden bg-gray-100">
                                <img src={obj?.image} alt="Product" className="h-full w-full object-cover" />
                            </div>
                            <div className="ml-3 flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{obj?.name}</p>
                            </div>
                            <button
                                onClick={() => {
                                    setProduct(obj);
                                    setIsDeleteModalOpen(true);
                                }}
                                type="button"
                                className="ml-2 p-1 text-gray-400 hover:text-red-500 focus:outline-none"
                            >
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

                {/* Modal Footer */}
                <div className="mt-6 flex justify-end space-x-2">
                    <button
                        onClick={() => setCategoryModal(false)}
                        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#4B164C] text-white text-sm rounded hover:bg-[#3a0f3a]">Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditPackageCategoryModal;
