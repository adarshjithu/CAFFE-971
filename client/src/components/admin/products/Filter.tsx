import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getCategories } from "../../../services/adminService";
import { ICategory } from "../../../interface/ICategory";

interface ProductFilterProps {
  search: string;
  setSearch: (value: string) => void;
  isActive: string;
  setIsActive: (value: string) => void;
  categoryName: string;
  setCategoryName: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  setPage:any
}

const ProductFilter = ({
  search,
  setSearch,
  isActive,
  setIsActive,
  categoryName,
  setCategoryName,
  type,
  setType,
  setPage
}: ProductFilterProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategories();
        setCategories(res?.data?.data);
      } catch (error) {
        toast.error(error as string);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
        setPage(1)
      setSearch(value);
      
    }, 500);

    setDebounceTimeout(timeout);
  };

  return (
    <div className="mb-4 bg-white dark:bg-gray-800 shadow rounded-xl p-4 flex flex-col gap-4 md:flex-row">
      {/* Search Input */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Search
        </label>
        <input
          type="text"
          defaultValue={search}
          onChange={handleSearch}
          placeholder="Search products..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Active Status Filter */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Status
        </label>
        <select
          value={isActive}
          onChange={(e) => setIsActive(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      {/* Type Filter */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Type
        </label>
        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">All</option>
          <option value="veg">Veg</option>
          <option value="nonVeg">Non-Veg</option>
          <option value="none">Other</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Categories
        </label>
        <select
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">All</option>
          {categories?.map((obj: ICategory) => (
            <option key={obj._id} value={obj.name}>
              {obj.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
