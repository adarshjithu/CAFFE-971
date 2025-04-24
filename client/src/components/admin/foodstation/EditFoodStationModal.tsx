import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import ButtonLoading from "../../loading/ButtonLoading";
import { useDispatch } from "react-redux";

import { validateFoodStationForm, ValidationError } from "../../../utils/foodValidation";
import { IFoodStation } from "../../../interface/IFoodStation";
import { updateFoodStation } from "../../../services/adminService";
import { updatefoodStationAction } from "../../../features/admin/foodStationSlice";

interface EditFoodStationModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    foodStation: IFoodStation;
}

const EditFoodStationModal: React.FC<EditFoodStationModalProps> = ({ setIsOpen, foodStation }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: "",
    });
    const [image, setImage] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ValidationError>({});
    const dispatch = useDispatch();
    const [changed,setChanged] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setChanged(true)
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewURL(URL.createObjectURL(file));
        }
        setChanged(true)
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateFoodStationForm(formData); 
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
   
        if(!changed) {toast.error('No changes made');return }
        setErrors({});
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("type", formData.type);
        if (image) data.append("image", image); // Only append if user changes it

        try {
            setLoading(true);
            
             const res =  await updateFoodStation(foodStation?._id,data)
             dispatch(updatefoodStationAction(res?.data?.data))
            toast.success("Food Station updated successfully!");
            setIsOpen(false);
        } catch (error) {
            toast.error(error as string);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const newFormData = {
            name: foodStation?.name || "",
            description: foodStation?.description || "",
            type: foodStation?.type || "",
        };
        setFormData(newFormData);
        setPreviewURL(foodStation?.image || null);
        setChanged(false)
    }, [foodStation]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-[black]">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Edit Food Station</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter name"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring ${
                                errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-500 dark:border-gray-600"
                            } dark:bg-gray-800 dark:text-white`}
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Enter description"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring ${
                                errors.description
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-gray-300 focus:border-indigo-500 dark:border-gray-600"
                            } dark:bg-gray-800 dark:text-white`}
                        />
                        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                        <input
                            type="text"
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            placeholder="Enter type"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring ${
                                errors.type ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-500 dark:border-gray-600"
                            } dark:bg-gray-800 dark:text-white`}
                        />
                        {errors.type && <p className="text-sm text-red-500 mt-1">{errors.type}</p>}
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Change Image (optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#4B164C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3a123c] dark:file:bg-[#4B164C]/90 dark:hover:file:bg-[#3a123c]/90"
                        />
                    </div>

                    {/* Preview */}
                    {previewURL && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Preview:</p>
                            <img src={previewURL} alt="Preview" className="w-[100px] h-auto rounded-md border dark:border-gray-700" />
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition"
                        >
                            {loading ? <ButtonLoading /> : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFoodStationModal;
