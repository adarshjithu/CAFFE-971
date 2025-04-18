import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { editPackage } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import { updatePackageAction } from "../../../features/admin/packageSlice";
import ButtonLoading from "../../loading/ButtonLoading";

function EditPackageModal({ packageData, setEditPackageModal }: any) {
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        minQuantity: "",
        maxQuantity: "",
    });

    useEffect(() => {
        if (packageData) {
            setFormData({
                name: packageData.name || "",
                description: packageData.description || "",
                price: packageData.price || "",
                minQuantity: packageData.minQuantity || "",
                maxQuantity: packageData.maxQuantity || "",
            });
        }
    }, [packageData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const res = await editPackage(packageData?._id, formData);
             dispatch(updatePackageAction(res?.data?.data))
            if (res?.data?.success) toast.success(res?.data?.message);
            setLoading(false)
            setEditPackageModal(false)
        } catch (error) {
            setLoading(false)
            toast.error(error as string);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-[black] text-gray-800 dark:text-white w-full max-w-lg p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Edit Package</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Package Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#4B164C]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:ring-[#4B164C]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm mb-1">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full border dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#4B164C]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Min Quantity</label>
                            <input
                                type="number"
                                name="minQuantity"
                                value={formData.minQuantity}
                                onChange={handleChange}
                                className="w-full border dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#4B164C]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Max Quantity</label>
                            <input
                                type="number"
                                name="maxQuantity"
                                value={formData.maxQuantity}
                                onChange={handleChange}
                                className="w-full border dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#4B164C]"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 flex justify-end space-x-3">
                    <button
                        onClick={() => setEditPackageModal(false)}
                        className="px-4 py-2 text-sm rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="px-4 py-2 text-sm rounded bg-[#4B164C] text-white hover:bg-[#3a0f3a]">
                       { loading?<ButtonLoading/>:"Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditPackageModal;
