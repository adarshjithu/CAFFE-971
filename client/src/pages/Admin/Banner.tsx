import React, { useState, ChangeEvent } from 'react';
import {
  Plus,
  Check,
  X,
  Edit,
  Trash2,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

interface Banner {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
}

const BannerManagement: React.FC = () => {
  const initialBanners: Banner[] = [
    {
      id: 1,
      title: 'Summer Sale',
      imageUrl: 'https://via.placeholder.com/300x150?text=Summer+Sale',
      link: '/summer-sale',
      isActive: true,
      startDate: '2023-06-01',
      endDate: '2023-06-30',
    },
    {
      id: 2,
      title: 'New Arrivals',
      imageUrl: 'https://via.placeholder.com/300x150?text=New+Arrivals',
      link: '/new-arrivals',
      isActive: true,
      startDate: '2023-07-01',
      endDate: '2023-07-31',
    },
    {
      id: 3,
      title: 'Back to School',
      imageUrl: 'https://via.placeholder.com/300x150?text=Back+to+School',
      link: '/back-to-school',
      isActive: false,
      startDate: '2023-08-15',
      endDate: '2023-09-15',
    },
    {
      id: 4,
      title: 'Winter Collection',
      imageUrl: 'https://via.placeholder.com/300x150?text=Winter+Collection',
      link: '/winter-collection',
      isActive: true,
      startDate: '2023-11-01',
      endDate: '2023-12-31',
    },
  ];

  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newBanner, setNewBanner] = useState<Omit<Banner, 'id'>>({
    title: '',
    imageUrl: '',
    link: '',
    isActive: true,
    startDate: '',
    endDate: '',
  });

  const handleEdit = (banner: Banner) => setEditingBanner({ ...banner });

  const handleSaveEdit = () => {
    if (!editingBanner) return;
    setBanners((prev) =>
      prev.map((b) => (b.id === editingBanner.id ? editingBanner : b))
    );
    setEditingBanner(null);
  };

  const handleCancelEdit = () => setEditingBanner(null);

  const handleDelete = (id: number) =>
    setBanners((prev) => prev.filter((b) => b.id !== id));

  const handleAdd = () => setIsAdding(true);

  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewBanner({
      title: '',
      imageUrl: '',
      link: '',
      isActive: true,
      startDate: '',
      endDate: '',
    });
  };

  const handleSaveNew = () => {
    const newId = Math.max(...banners.map((b) => b.id), 0) + 1;
    const bannerToAdd: Banner = { ...newBanner, id: newId };
    setBanners((prev) => [...prev, bannerToAdd]);
    handleCancelAdd();
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (!editingBanner) return;
    setEditingBanner({
      ...editingBanner,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleNewChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewBanner({
      ...newBanner,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const toggleStatus = (id: number) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isActive: !b.isActive } : b))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Banner Management</h2>

      <button
        onClick={handleAdd}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-6"
      >
        <Plus size={16} /> Add New Banner
      </button>

      {isAdding && (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
          <h3 className="text-xl font-semibold mb-4">Add New Banner</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {['title', 'imageUrl', 'link', 'startDate', 'endDate'].map(
              (field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, ' $1')}:
                  </label>
                  <input
                    type={field.includes('Date') ? 'date' : 'text'}
                    name={field}
                    value={(newBanner as any)[field]}
                    onChange={handleNewChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )
            )}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={newBanner.isActive}
                onChange={handleNewChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Active</label>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSaveNew}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              <Check size={16} /> Save
            </button>
            <button
              onClick={handleCancelAdd}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`border rounded-lg overflow-hidden shadow-sm ${
              !banner.isActive ? 'bg-gray-100 opacity-75' : 'bg-white'
            }`}
          >
            {editingBanner?.id === banner.id ? (
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3">Edit Banner</h3>
                <div className="space-y-3 mb-4">
                  {['title', 'imageUrl', 'link', 'startDate', 'endDate'].map(
                    (field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                          {field.replace(/([A-Z])/g, ' $1')}:
                        </label>
                        <input
                          type={field.includes('Date') ? 'date' : 'text'}
                          name={field}
                          value={(editingBanner as any)[field]}
                          onChange={handleEditChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    )
                  )}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isActive"
                      checked={editingBanner.isActive}
                      onChange={handleEditChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      Active
                    </label>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSaveEdit}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    <Check size={16} /> Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    <X size={16} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold">{banner.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    {banner.startDate} - {banner.endDate}
                  </p>
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => handleEdit(banner)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <Edit size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                    <button
                      onClick={() => toggleStatus(banner.id)}
                      className="text-yellow-600 hover:text-yellow-800 text-sm flex items-center gap-1"
                    >
                      {banner.isActive ? (
                        <ToggleRight size={16} />
                      ) : (
                        <ToggleLeft size={16} />
                      )}
                      Toggle
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerManagement;
