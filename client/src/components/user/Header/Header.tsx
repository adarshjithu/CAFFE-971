import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 mt-2 bg-[#F9FAFB]">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="/61f78fc8e031ece2f286631de8438d56.png"
          alt="Cafee 971 Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-xl font-bold text-gray-800">CAFEE 971</h1>
      </div>

      {/* Search Box */}
      <div className="flex items-center flex-1 justify-center px-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD9455] focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Notification Button */}
      <div className="flex">
        <button
          className="p-2 ml-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#BD9455]"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Header;
