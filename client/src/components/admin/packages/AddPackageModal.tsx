import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { getAllProducts, getProductsAndCategory } from "../../../services/adminService";
import ButtonLoading from "../../loading/ButtonLoading";
import { IProduct } from "../../../interface/IProduct";

interface AddPackageModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onPackageCreated: () => void; // Callback when package is successfully created
}

interface PackageFormData {
    name: string;
    description: string;
    price: string;
    image: string;
    mains: string[];
    accompaniments: string[];
    sidesAndBeverages: string[];
}

const AddPackageModal: React.FC<AddPackageModalProps> = ({ setIsOpen, onPackageCreated }) => {
    const [loading, setLoading] = useState(false);
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const [categoryNames, setCategoryNames] = useState<any[]>([]);
    const [mains,setMains] = useState([])
    const [accompaniments,setAccompaniments] = useState([])
    const [sidesAndBeverages,setSidesAndBeverages] = useState([])
    const [formData, setFormData] = useState<PackageFormData>({
        name: "",
        description: "",
        price: "",
        image: "",
        mains: [],
        accompaniments: [],
        sidesAndBeverages: [],
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [selectedTab, setSelectedTab] = useState();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleProductToggle = (productId: string, category: string) => {
     
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Here you would typically:
            // 1. Upload the image file to your server and get the URL
            // 2. Create the package with all the form data
            // 3. Show success message and close the modal

            // Example (you'll need to implement your actual API call):
            // const imageUrl = await uploadImage(imageFile);
            // const packageData = {
            //     ...formData,
            //     image: imageUrl
            // };
            // await createPackage(packageData);

            toast.success("Package created successfully!");
            onPackageCreated();
            setIsOpen(false);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to create package");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductsAndCategory();

                setCategoryNames(res?.data?.data?.category);
                setSelectedTab(res?.data?.data?.category[0])
                // setProducts(res?.data?.produc)
            } catch (error) {
                toast.error(error instanceof Error ? error.message : "Failed to load products");
            }
        };
        fetchData();
    }, []);

    // Filter products by category for the current tab
    const filteredProducts = products.filter((product) => {
        console.log(product);
        if (selectedTab === "mains") return product?.category?.name === "main";
        if (selectedTab === "accompaniments") return product.category === "accompaniment";
        if (selectedTab === "sidesAndBeverages") return product.category === "side" || product.category === "beverage";
        return false;
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
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
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter package name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price*</label>
                            <input
                                type="text"
                                name="price"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                placeholder="Enter package price"
                                value={formData.price}
                                onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            rows={3}
                        />
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
                            {categoryNames?.map((obj:string) => {
                                return (
                                    <button
                                        type="button"
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

                        {/* Product List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-2">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <div
                                        key={product._id}
                                        className={`flex items-center p-2 rounded border ${
                                            formData[selectedTab].includes(product._id)
                                                ? "border-[#4B164C] bg-[#4B164C]/10"
                                                : "border-gray-200 dark:border-gray-700"
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            id={`product-${product._id}`}
                                            checked={formData[selectedTab].includes(product._id)}
                                            onChange={() => handleProductToggle(product._id, selectedTab)}
                                            className="h-4 w-4 text-[#4B164C] focus:ring-[#4B164C] border-gray-300 rounded"
                                        />
                                        <label htmlFor={`product-${product._id}`} className="ml-2 flex-1">
                                            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">{product.name}</span>
                                            <span className="block text-xs text-gray-500 dark:text-gray-400">${product.price}</span>
                                        </label>
                                        {product.image && <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />}
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500 col-span-2 py-4 text-center">No {selectedTab} products available</p>
                            )}
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
