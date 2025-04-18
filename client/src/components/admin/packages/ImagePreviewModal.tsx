import { useState } from "react";
import toast from "react-hot-toast";
import { updatePackageImage } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import { updateImageAction } from "../../../features/admin/packageSlice";
import ButtonLoading from "../../loading/ButtonLoading";

const ImagePreview = ({ imageUrl, setEditImageModal, packageId }: any) => {
  const [image, setImage] = useState(imageUrl);
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);
      
    setLoading(true)
      const res = await updatePackageImage(formData, packageId);
      setLoading(false)
      dispatch(updateImageAction(res?.data?.data))
      setEditImageModal(false)

    } catch (error: any) {
      setLoading(false)
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-3xl max-h-[95vh] p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setEditImageModal(false)}
          className="absolute top-4 right-4 text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300 text-2xl"
        >
          &times;
        </button>

        {/* Full Image Preview */}
        <div className="flex justify-center items-center mb-6">
          <img
            src={image}
            alt="Full preview"
            className="w-full max-h-[70vh] object-contain rounded-lg"
          />
        </div>

        {/* Upload / Update Button */}
        <div className="flex justify-center">
          {!file ? (
            <label className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
              Upload New Image
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition"
            >
             { loading?<ButtonLoading/>:"Update"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
