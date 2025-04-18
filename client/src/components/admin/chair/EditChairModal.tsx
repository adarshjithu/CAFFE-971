import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { IChair } from "../../../interface/IChair";
import toast from "react-hot-toast";
import { updateChair } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import { updateChairAction } from "../../../features/admin/chairSlice";
import ButtonLoading from "../../loading/ButtonLoading";

interface EditChairModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chair: IChair;
}

const EditChairModal: React.FC<EditChairModalProps> = ({ setIsOpen, chair }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const [changed, setChanged] = useState(false);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChanged(true);
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!changed) {
            toast.error("No changes made");
            return;
        }
        if (!image && !name) {
            toast.error("Empty Data");
            return;
        }

        try {
            setLoading(true)
            const formData = new FormData();
            image ? formData.append("image", image || "") : "";
            formData.append("name", name);
            const res = await updateChair(chair?._id, formData);
            dispatch(updateChairAction(res?.data?.data));
            toast.success(res?.data?.message);
            setLoading(false)
            setIsOpen(false);
        } catch (error) {
            toast.error(error as string);
            setLoading(false)
        }
    };

    useEffect(() => {
        setName(chair?.name || "");
        setPreviewURL(chair?.image || "");
        setChanged(false);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-black">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Add Chair</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setChanged(true);
                            }}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            placeholder="Enter chair name"
                        />
                    </div>

                    {/* Image input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image</label>
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

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4B164C] px-4 py-2 text-white text-sm font-medium hover:bg-[#3a123c] transition"
                        >
                          {loading?<ButtonLoading/>:  'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditChairModal;
