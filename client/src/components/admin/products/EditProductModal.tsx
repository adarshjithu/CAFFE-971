import React, { useEffect, useState } from "react";
import { AlertTriangle, Table, X } from "lucide-react";
import toast from "react-hot-toast";
import { addCategory, addProduct, getCategories, updateProduct } from "../../../services/adminService";
import ButtonLoading from "../../loading/ButtonLoading";
import { useDispatch } from "react-redux";
import { ICategory } from "../../../interface/ICategory";
import { createProductAction } from "../../../features/admin/productSlice";


interface EditProductModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    category:any
}

const EditProductModal: React.FC<EditProductModalProps> = ({ setIsOpen,category }) => {
    const [loading, setLoading] = useState(false);
    const [previewURL, setPreviewURL] = useState<string | null>(category?.image);
    const [formData, setFormData] = useState({ name: category?.name, category: category?.category?._id, type: category?.type });
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [image, setImage] = useState<any>();
    const dispatch = useDispatch();
    const [changed,setChanged] = useState(false)
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewURL(URL.createObjectURL(file));
        }
        setChanged(true)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
           
            if(!changed) {toast.error("No changed made");return }

            const form = new FormData();
            form.append("name", formData?.name);
            form.append("category", formData?.category||category?.category?._id);
            image&&form.append("image", image)
            form.append("type", formData?.type);
            
            setLoading(true);
            const res = await updateProduct(form,category?._id);
            dispatch(createProductAction(res?.data?.data))
            toast.success(res?.data?.message)
            setLoading(false);
            setIsOpen(false);
            setChanged(false)
        } catch (error) {
            setLoading(false);
            toast.error(error as string);
        }
    };

    const handleChange = (e: any) => {
        setChanged(true)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getCategories();
            setCategories(res?.data?.data);
        };

        fetchData();
    }, []);


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-[black]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Add Product</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Name</label>
                        <input
                            name="name"
                            onChange={handleChange}
                            value={formData?.name}
                            type="text"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            placeholder="Enter category name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                        <select
                            onChange={handleChange}
                            value={formData?.category}
                            name="category"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        >
                            <option value="" disabled selected className="text-gray-500 dark:text-gray-400">
                                Select Category
                            </option>
                            {categories?.map((obj: ICategory, index) => (
                                <option key={index} value={obj?._id} className="text-black dark:text-white">
                                    {obj.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                        <div className="flex gap-4">
                            <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                <input
                                    type="checkbox"
                                    name="type"
                                    checked={formData?.type == "veg"}
                                    onChange={handleChange}
                                    value="veg"
                                    className="form-checkbox h-4 w-4 text-green-600 dark:bg-gray-800 dark:border-gray-600"
                                />
                                <span>Veg</span>
                            </label>

                            <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                <input
                                    name="type"
                                    checked={formData?.type == "nonVeg"}
                                    type="checkbox"
                                    onChange={handleChange}
                                    value="nonVeg"
                                    className="form-checkbox h-4 w-4 text-red-600 dark:bg-gray-800 dark:border-gray-600"
                                />
                                <span>Non-Veg</span>
                            </label>
                        </div>
                    </div>

                    {/* Image input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#4B164C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3a123c] dark:file:bg-[#4B164C]/90 dark:hover:file:bg-[#3a123c]/90"
                        />
                    </div>

                    {/* Image preview */}
                    {previewURL && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Preview:</p>
                            <img src={previewURL} alt="Preview" className="w-[100px] h-auto rounded-md border dark:border-gray-700" />
                        </div>
                    )}

                    {/* Submit button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition"
                        >
                            {loading ? <ButtonLoading /> : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
