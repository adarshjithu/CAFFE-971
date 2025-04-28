import React, { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { createAddOn } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import {  createaddonAction } from "../../../features/admin/addOnSlice";
import ButtonLoading from "../../loading/ButtonLoading";

interface AddAddOnModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAddOnModal: React.FC<AddAddOnModalProps> = ({ setIsOpen }) => {
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !price || !image) {
            toast.error("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price.toString());
        formData.append("image", image);

        try {
            setLoading(true)
            const res = await createAddOn(formData);
            const newAddOn = res?.data?.data;
            console.log(newAddOn)
            dispatch(createaddonAction(newAddOn));
            toast.success("Add-on created successfully!");
            setIsOpen(false);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error((error as any)?.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-[black]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Add Chair</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter chair name"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            placeholder="Enter price"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Image Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#4B164C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3a123c] dark:file:bg-[#4B164C]/90 dark:hover:file:bg-[#3a123c]/90"
                        />
                    </div>

                    {/* Image Preview */}
                    {previewUrl && (
                        <div className="w-full max-h-[200px] overflow-hidden">
                            <img src={previewUrl} alt="Preview" className="w-full rounded border object-cover max-h-[200px]" />
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition"
                        >
                           {loading?<ButtonLoading/>: 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAddOnModal;
