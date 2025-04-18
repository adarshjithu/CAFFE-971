import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ITable } from "../../../interface/ITable";
import toast from "react-hot-toast";
import { updateTable } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import { updatetableAction } from "../../../features/admin/tableSlice";
import ButtonLoading from "../../loading/ButtonLoading";

type FormDataType = {
    name: string;
    image: any;
    width: string;
    height: string;
    length: string;
    chairCount: any;
    rate: any;
};

type FormErrors = Partial<Record<keyof FormDataType, string>>;

interface TableEditModalProps {
    setTableEditModal: any;
    table: ITable;
}

const TableEditModal: React.FC<TableEditModalProps> = ({ setTableEditModal, table }) => {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        image: null,
        width: "",
        height: "",
        length: "",
        chairCount: "",
        rate: "",
    });
    const [imageUrl, setImageUrl] = useState("");
    const [changed, setChanged] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const dispatch = useDispatch()
    const [loading,setLoading]  =useState(false);
    const [file,setfile] = useState<any>(null)

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
        setChanged(true);
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files?.[0] || null;
            setFormData((prev) => ({ ...prev, image: file }));
            setfile(file)

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
        if (!changed) {
            toast.error("No changes made");
            return;
        }
        if (validateForm()) {
            try {
                const form = new FormData();
                form?.append("name", formData?.name);
                form?.append("width", formData?.width);
                form?.append("height", formData?.height);
                form?.append("length", formData?.length);
                form?.append("chairCount", formData?.chairCount);
                form?.append("rate", formData?.rate);

                file?form?.append("image", formData?.image):''
                setLoading(true)
                const res = await updateTable(table?._id, form);
                dispatch(updatetableAction(res?.data?.data));
                setTableEditModal(false)
                setLoading(false)
                toast.success(res?.data?.message)
            } catch (error) {
                setLoading(false)
                toast.error(error as string);
            }
        }
    };

    useEffect(() => {
        const newTable = {
            name: table?.name,
            image: table?.image,
            width: table?.width,
            height: table?.height,
            length: table?.length,
            chairCount: table?.chairCount,
            rate: table?.length,
        };
        setImageUrl(table?.image);
        setFormData(newTable);
        setChanged(false);
    }, [table]);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white dark:bg-[black] w-full max-w-md rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    onClick={() => setTableEditModal(false)}
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Edit Table Info</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300">Image</label>
                        <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full text-sm text-gray-500" />

                        {imageUrl && (
                            <div className="mt-2">
                                <img src={imageUrl} alt="Preview" className="h-40 w-full object-contain rounded-md border dark:border-gray-600" />
                            </div>
                        )}
                    </div>

                    {/* Dimensions */}
                    <div className="flex gap-2">
                        {["width", "height", "length"].map((dim) => (
                            <div key={dim} className="flex-1">
                                <input
                                    type="text"
                                    name={dim}
                                    value={(formData as any)[dim]}
                                    onChange={handleChange}
                                    placeholder={dim.charAt(0).toUpperCase() + dim.slice(1)}
                                    className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
                                />
                                {errors[dim as keyof FormErrors] && <p className="text-sm text-red-500">{errors[dim as keyof FormErrors]}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Chair Count */}
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300">Chair Count</label>
                        <input
                            type="number"
                            name="chairCount"
                            value={formData.chairCount}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
                        />
                        {errors.chairCount && <p className="text-sm text-red-500">{errors.chairCount}</p>}
                    </div>

                    {/* Rate */}
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300">Rate (₹)</label>
                        <input
                            type="number"
                            name="rate"
                            value={formData.rate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
                        />
                        {errors.rate && <p className="text-sm text-red-500">{errors.rate}</p>}
                    </div>

                    <button type="submit" className="w-full bg-[#4B164C] text-white py-2 rounded hover:bg-[#3a123c]">
                       {loading?<ButtonLoading/>:" Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TableEditModal;
