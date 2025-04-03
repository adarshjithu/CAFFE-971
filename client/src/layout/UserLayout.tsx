import { Utensils, Home, ShoppingBag, Calendar, Tag, Star } from "lucide-react";
import { Outlet } from "react-router-dom"; // Changed import from "react-router" to "react-router-dom"

const UserLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Desktop Sidebar - Left Column */}
      <aside className="hidden md:flex flex-col items-center bg-white text-black h-screen w-20 p-4 shadow-lg space-y-6 fixed">
        <div className="flex flex-col items-center space-y-4">
          <Utensils className="text-2xl" />
          <h1 className="text-sm font-bold">971</h1>
        </div>

        <nav className="flex flex-col space-y-6 text-lg items-center">
          <button className="hover:text-gray-600 transition cursor-pointer">
            <Home />
          </button>
          <button className="hover:text-gray-600 transition cursor-pointer">
            <ShoppingBag />
          </button>
          <button className="hover:text-gray-600 transition cursor-pointer">
            <Calendar />
          </button>
          <button className="hover:text-gray-600 transition cursor-pointer">
            <Tag />
          </button>
          <button className="hover:text-gray-600 transition cursor-pointer">
            <Star />
          </button>
        </nav>

        <button className="bg-[#BD9455] text-white p-3 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
          <ShoppingBag size={20} />
        </button>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white text-black shadow-lg flex justify-around items-center p-3 z-10">
        <button className="flex flex-col items-center text-xs hover:text-gray-600 transition">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="flex flex-col items-center text-xs hover:text-gray-600 transition">
          <ShoppingBag size={20} />
          <span>Shop</span>
        </button>
        <button className="flex flex-col items-center text-xs hover:text-gray-600 transition">
          <Calendar size={20} />
          <span>Calendar</span>
        </button>
        <button className="flex flex-col items-center text-xs hover:text-gray-600 transition">
          <Tag size={20} />
          <span>Tags</span>
        </button>
        <button className="flex flex-col items-center text-xs hover:text-gray-600 transition">
          <Star size={20} />
          <span>Favorites</span>
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto md:ml-20 pb-16 md:pb-0">
        <Outlet /> 
      </main>
    </div>
  );
};

export default UserLayout;