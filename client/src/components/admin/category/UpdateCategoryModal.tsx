import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { addCategory, updateCategory } from "../../../services/adminService";
import ButtonLoading from "../../loading/ButtonLoading";
import { useDispatch } from "react-redux";
import { createCategory, updateCategoryAction } from "../../../features/categorySlice";
import { ICategory } from "../../../interface/ICategory";

interface UpdateCategoryModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    category:any
}

const UpdateCategoryModal: React.FC<UpdateCategoryModalProps> = ({ isOpen, setIsOpen ,category}) => {
    const [loading, setLoading] = useState(false);
    const [previewURL, setPreviewURL] = useState<string|null>(null);
    const [name, setName] = useState('');
    
    const [image, setImage] = useState<any>();
    const [formChanged,setFormChanged] = useState(false)
    const dispatch = useDispatch();
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormChanged(true)
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!formChanged) {
                toast.error("No changes made");
                return;
            }
            
            setLoading(true);
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            const res = await updateCategory(category?._id,formData);
            console.log(res?.data?.data)
             dispatch(updateCategoryAction(res?.data?.data));
            if (res?.data?.success) toast.success(res?.data?.message);
            setIsOpen(false);
            setLoading(false);
        } catch (error) {
            toast.error(error as string);
        }
    };

    useEffect(()=>{setName(category?.name)},[category])
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-[black]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Add Category</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category Name</label>
                        <input
                            type="text"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            placeholder="Enter category name"
                            value={name}
                            onChange={(e) => {setName(e.target.value);setFormChanged(true)}}
                        />
                    </div>

                    {/* Image input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#4B164C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3a123c] dark:file:bg-[#4B164C]/90 dark:hover:file:bg-[#3a123c]/90"
                        />
                    </div>

                    {/* Image preview */}
                   
                        <div className="mt-2">
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Preview:</p>
                            <img src={previewURL?previewURL:category?.image} alt="Preview" className="w-[100px] h-auto rounded-md border dark:border-gray-700" />
                        </div>
                    

                    {/* Submit button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition"
                        >
                            {loading ? <ButtonLoading /> : "Add Category"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCategoryModal;
