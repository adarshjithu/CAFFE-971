import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { createPackage, getProductsAndCategory } from "../../../services/adminService";
import ButtonLoading from "../../loading/ButtonLoading";
import { IProduct } from "../../../interface/IProduct";
import AddProductInCategoryModal from "./AddProductInCategoryModal";
import { useSidebar } from "../../../context/SidebarContext";
import { useDispatch } from "react-redux";

interface AddPackageModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPackageModal: React.FC<AddPackageModalProps> = ({ setIsOpen }) => {
    const [loading, setLoading] = useState(false);
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const [categoryNames, setCategoryNames] = useState<any[]>([]);
    const [categories, setCategories] = useState<any>({});
    const dispatch = useDispatch();
    const [addProductModal, setAddProductModal] = useState(false);
    const [formData, setFormData] = useState<any>({
        name: "",
        description: "",
        price: "",
        image: "",
        products: {},
        minQuantity:10,
        maxQuantity:1500
    });
    const [imageFile, setImageFile] = useState<any>(null);
    const [products, setProducts] = useState<any[]>([]);
    const [selectedTab, setSelectedTab] = useState<any>();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const products: any = {};

            for (let i in categories) {
                products[i] = categories[i]?.map((obj: any) => obj?._id);
            }

            const form = new FormData();
            form.append("name", formData?.name);
            form?.append("description", formData?.description);
            form?.append("image", imageFile);
            form?.append("price", formData?.price);
            form?.append("products", JSON.stringify(products));
            form?.append("minQuantity",formData?.minQuantity)
            form?.append("maxQuantity",formData?.maxQuantity)
            

            const res = await createPackage(form);
            toast.success(res?.data?.message);
            setIsOpen(false);
        } catch (error) {
            toast.error(error as string);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductsAndCategory();
                const productsObj: any = {};
                const category = res?.data?.data?.category;
                for (let i of category) {
                    productsObj[i] = [];
                }
                setFormData({ ...formData, products: productsObj });
                setCategories(productsObj);
                setCategoryNames(res?.data?.data?.category);
                setSelectedTab(res?.data?.data?.category[0]);
                setProducts(res?.data?.data?.products);
            } catch (error) {
                toast.error(error instanceof Error ? error.message : "Failed to load products");
            }
        };
        fetchData();
    }, []);

    const removeProduct = (obj: any) => {
        setCategories((prev: any) => ({
            ...prev,
            [selectedTab]: prev[selectedTab].filter((data: any) => data?._id !== obj?._id),
        }));
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {addProductModal && (
                <AddProductInCategoryModal
                    categories={categories}
                    setCategories={setCategories}
                    selectedTab={selectedTab}
                    setAddProductModal={setAddProductModal}
                />
            )}
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-lg dark:bg-[black] max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Create New Package</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Package Name*</label>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter package name"
                                value={formData.name}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price*</label>
                            <input
                                type="number"
                                name="price"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter package price"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                        <textarea
                            name="description"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            placeholder="Enter package description"
                            value={formData.description}
                            rows={3}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        />
                    </div>
                    {/* Purchase Quantity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Min Quantity*</label>
                            <input
                                type="number"
                                name="min"
                                onChange={(e)=>setFormData({...formData,maxQuantity:e.target.value})}
                                 value={formData?.maxQuantity}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter minimum quantity"
                                
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Quantity*</label>
                            <input
                                type="number"
                                 onChange={(e)=>setFormData({...formData,minQuantity:e.target.value})}
                                name="max"
                               value={formData?.minQuantity}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter maximum quantity"
                                
                            />
                        </div>
                    </div>

                    {/* Image input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Package Image*</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#4B164C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3a123c] dark:file:bg-[#4B164C]/90 dark:hover:file:bg-[#3a123c]/90"
                            required
                        />
                    </div>

                    {/* Image preview */}
                    {previewURL && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Preview:</p>
                            <img src={previewURL} alt="Preview" className="w-[100px] h-auto rounded-md border dark:border-gray-700" />
                        </div>
                    )}

                    {/* Product Selection */}
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
                                onClick={() => setAddProductModal(true)}
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4B164C] hover:bg-[#3a0f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B164C] transition-colors duration-200"
                            >
                                <svg
                                    className="-ml-1 mr-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
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
                            {categories[selectedTab]?.map((product: IProduct) => (
                                <div key={product?._id} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
                                        <img src={product?.image} alt="Product" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="ml-3 flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{product?.name}</p>
                                    </div>
                                    <button
                                        onClick={() => removeProduct(product)}
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
                    </div>

                    {/* Submit button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition disabled:opacity-70"
                        >
                            {loading ? <ButtonLoading /> : "Create Package"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackageModal;
