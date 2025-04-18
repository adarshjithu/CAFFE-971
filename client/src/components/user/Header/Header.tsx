import { Utensils, X, Home, ShoppingBag, Calendar, Tag, Star, Bell } from "lucide-react";
import { useState } from "react";
import { ThemeToggleButton } from "../../common/ThemeToggleButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
 
      <div className="w-full flex items-center justify-between px-5 py-4 bg-white shadow-sm">
                <div className="flex items-center space-x-4">
                    <img src="/61f78fc8e031ece2f286631de8438d56.png" alt="Cafee 971 Logo" className="w-12 h-12 object-contain" />
                    <h1 className="text-xl font-bold text-gray-800">CAFEE 971</h1>
                </div>
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
