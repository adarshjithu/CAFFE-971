import { Camera, FileUser, User } from 'lucide-react';
import React, { useRef, useState } from 'react';

const MyProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profileImage: ''
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setFormData(prev => ({ ...prev, profileImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">My Profile</h1>
      
     {/* Profile Image with Upload */}
      <div className="flex justify-center mb-8 relative">
        <div className="relative">
          {previewImage ? (
            <img 
              src={previewImage} 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md bg-gray-100 flex items-center justify-center">
              <User className="text-gray-400 text-4xl" />
            </div>
          )}
          <button
            type="button"
            onClick={triggerFileInput}
            className="absolute bottom-0 right-0 bg-[#BD9455] text-white p-2 rounded-full hover:bg-[#a87f4a] transition"
          >
            <Camera className="text-lg" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Form Inputs - Centered */}
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
        <div className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-6 mb-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              className="w-full p-3 bg-[#D9D9D9] rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD9455]"
            />
          </div>
          
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              className="w-full p-3 bg-[#D9D9D9] rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD9455]"
            />
          </div>
          
          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number" 
              className="w-full p-3 bg-[#D9D9D9] rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD9455]"
            />
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#BD9455] text-white font-medium p-3 rounded-2xl mt-20"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
