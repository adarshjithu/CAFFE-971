import { Utensils, Home, ShoppingBag, Calendar, Tag, Star, Armchair, Soup, PlusCircle } from "lucide-react";
import { Outlet } from "react-router-dom"; // Changed import from "react-router" to "react-router-dom"
import Header from "../components/user/Header/Header";

const UserLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">

<aside className="mt-20 hidden md:flex flex-col items-center bg-[#F9FAFB] text-black h-screen w-20 p-4 space-y-6 fixed">
  

  <nav className="flex flex-col space-y-6 text-lg items-center">
    {[
      { icon: <Home />, label: 'Home' },
      { icon: <ShoppingBag />, label: 'Packages' },
      { icon: <Armchair />, label: 'Seating' },
      { icon: <Soup />, label: 'LiveStation' },
      { icon: <PlusCircle />, label: 'AddOns' },
    ].map((item, index) => (
      <div key={index} className="relative group flex flex-col items-center">
        <button className="hover:text-gray-600 transition cursor-pointer">
          {item.icon}
        </button>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
          View {item.label}
        </span>
      </div>
    ))}
  </nav>


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
        <Header/>
        <Outlet /> 
      </main>
    </div>
  );
};

export default UserLayout;