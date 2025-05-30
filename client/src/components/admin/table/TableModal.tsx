import React, { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { addTable } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import { createtableAction } from "../../../features/admin/tableSlice";
import ButtonLoading from "../../loading/ButtonLoading";

type FormDataType = {
    name: string; 
    image: File | null;
    width: string;
    height: string;
    length: string;
    chairCount: number | "";
    rate: number | "";
};

type FormErrors = Partial<Record<keyof FormDataType, string>>;

const TableModal = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        image: null,
        width: "",
        height: "",
        length: "",
        chairCount: "",
        rate: "",
    });

    const dispatch = useDispatch();
    const [errors, setErrors] = useState<FormErrors>({});
    const [imageUrl, setImageUrl] = useState("");
    const [loading,setLoading] = useState(false)

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.width.trim()) newErrors.width = "Width is required.";
        if (!formData.height.trim()) newErrors.height = "Height is required.";
        if (!formData.length.trim()) newErrors.length = "Length is required.";
        if (!formData.chairCount && formData.chairCount !== 0) newErrors.chairCount = "Chair count is required.";
        if (!formData.rate && formData.rate !== 0) newErrors.rate = "Rate is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files?.[0] || null;
            setFormData((prev) => ({ ...prev, image: file }));

            if (file) {
                const url = URL.createObjectURL(file);
                setImageUrl(url);
            } else {
                setImageUrl("");
            }
        } else if (type === "number") {
            setFormData((prev) => ({ ...prev, [name]: value === "" ? "" : Number(value) }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const data = new FormData();
        data.append("name", formData.name);
        if (formData.image) data.append("image", formData.image);
        data.append("width", formData.width);
        data.append("height", formData.height);
        data.append("length", formData.length);
        data.append("chairCount", String(formData.chairCount));
        data.append("rate", String(formData.rate));
        data?.append('image',formData?.image||'')

        try {
            setLoading(true)
            const res = await addTable(formData);
           
             dispatch( createtableAction(res?.data?.data));
            toast.success(res?.data?.message);
            setIsOpen(false);
            setLoading(false)
        } catch (error: any) {
            toast.error(error);
            setLoading(false)
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-[black]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Add Table</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter chair name"
                            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm dark:bg-gray-800 dark:text-white"
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Image Upload with Preview */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image (Optional)</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#4B164C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3a123c]"
                        />
                        {imageUrl && (
                            <div className="mt-2">
                                <img
                                    src={imageUrl}
                                    alt="Preview"
                                    className="h-40 w-full object-contain rounded-md border dark:border-gray-600"
                                />
                            </div>
                        )}
                    </div>

                    {/* Size */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Size</label>
                        <div className="flex gap-2">
                            {["width", "height", "length"].map((dim) => (
                                <div key={dim} className="flex-1">
                                    <input
                                        type="text"
                                        name={dim}
                                        value={(formData as any)[dim]}
                                        onChange={handleChange}
                                        placeholder={dim.charAt(0).toUpperCase() + dim.slice(1)}
                                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm dark:bg-gray-800 dark:text-white"
                                    />
                                    {errors[dim as keyof FormErrors] && (
                                        <p className="text-sm text-red-500">{errors[dim as keyof FormErrors]}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chair Count */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Chair Count</label>
                        <input
                            type="number"
                            name="chairCount"
                            value={formData.chairCount}
                            onChange={handleChange}
                            placeholder="Enter chair count"
                            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm dark:bg-gray-800 dark:text-white"
                        />
                        {errors.chairCount && <p className="text-sm text-red-500">{errors.chairCount}</p>}
                    </div>

                    {/* Rate */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rate (₹)</label>
                        <input
                            type="number"
                            name="rate"
                            value={formData.rate}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm dark:bg-gray-800 dark:text-white"
                        />
                        {errors.rate && <p className="text-sm text-red-500">{errors.rate}</p>}
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition"
                        >
                          { loading?<ButtonLoading/>: "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TableModal;
